import SeriesAuthorBooks from "../../models/seriesAuthorBooksSchema";
import seriesAuthors from "../../models/series_authorsSchema";
import dbConnect from "../../utils/dbCon";
import { setCache, getCache, giveCacheData } from "./controler/controler"


export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();

            let getBooks = await SeriesAuthorBooks.aggregate([
                {
                    $match: { series_slug: req.query.name }
                },
                {
                    $sort: { yearPublished: 1 }
                }
            ])

            const arr = await seriesAuthors.findOne({ slug: req.query.name })
            let otherAuthor = await seriesAuthors.aggregate([
                {
                    $sample: { size: 4 }
                }
            ]);

            if (arr !== null) {
                await setCache(req, { authorDetails: arr, otherAuthor: otherAuthor, books: getBooks })
                res.send({ authorDetails: arr, otherAuthor: otherAuthor, books: getBooks });
            } else {
                res.status(404).send({ statusCode: 404, message: "Data not found" })
            }
            // res.send(getBooks);
        }
    } catch (err) {
        res.send(err)
    }
}