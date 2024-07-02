import dbConnect from "../../utils/dbCon";
import Quotes from "../../models/quoteSchema"
import bookSchema from "../../models/bookSchema";
import seriesSchema from "../../models/seriesSchema";
import SeriesAuthorBooks from "../../models/seriesAuthorBooksSchema";
import { setCache, getCache, giveCacheData } from "./controler/controler"

const getImage = async (titleName) => {

    let data = await bookSchema.findOne({ title: titleName });
    if (data) {
        return data
    } else {
        data = await seriesSchema.findOne({ title: titleName });
        if (data) {
            return data
        }
        else {
            data = await SeriesAuthorBooks.findOne({ title: titleName });
            return data
        }
    }
}


export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            let slug = req.query.name;
            if (slug) {
                let quotes = await Quotes.find({ TITLE: slug });
                if (quotes.length <= 0) {
                    res.status(404).send({ statusCode: 404, message: "Data not found" });
                    return
                }
                let imgObj = await getImage(slug)
                res.send({ quotes, imgObj })
                return
            }
            let quotes = await Quotes.aggregate([
                {
                    $match: {}
                },
                {
                    $group: { _id: "$TITLE" }
                },
                {
                    $skip: (req.query.page * 1000)
                },
                {
                    $limit: 1000
                }
            ])
            await setCache(req, quotes)
            res.status(200).send(quotes);
        }
    } catch (err) {
        console.log(err)
    }
}