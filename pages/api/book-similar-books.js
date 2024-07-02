import dbConnect from "../../utils/dbCon";
import bookSchema from "../../models/bookSchema";
import seriesSchema from "../../models/seriesSchema";
import SeriesAuthorBooks from "../../models/seriesAuthorBooksSchema";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            // let inputJson = req.query.book
            await dbConnect();
            let data = await bookSchema.findOne({ slug: req.query.book });
            let similarBooks;
            if (data) {
                similarBooks = await bookSchema.find({ category_name: data.category_name });
                res.send({ statusCode: 200, data, similarBooks })
            } else {
                data = await seriesSchema.findOne({ slug: req.query.book });
                if (data) {

                    similarBooks = await seriesSchema.find({ series_slug: data.series_slug });
                    res.send({ statusCode: 200, data, similarBooks })
                }
                else {

                    data = await SeriesAuthorBooks.findOne({ slug: req.query.book });

                    if (!data) {
                        res.status(404).send({ statusCode: 404, message: "Data not found" });

                    } else {

                        similarBooks = await SeriesAuthorBooks.find({ series_slug: data.series_slug })
                        await setCache(req, { statusCode: 200, data, similarBooks })
                        return res.send({ statusCode: 200, data, similarBooks })
                    }
                }
            }
        }
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}