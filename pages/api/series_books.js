import seriesSchema from "../../models/seriesSchema";
import dbConnect from "../../utils/dbCon";
import series_name from "../../models/series_name";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            // console.log(req.query.name)
            let getBooks = await seriesSchema.aggregate([
                {
                    $match: { series_slug: req.query.name }
                },
                {
                    $sort: { yearPublished: 1 }
                }
            ])
            const arr = await series_name.findOne({ series_slug: req.query.name })
            const similarSeries = await series_name.aggregate([
                {
                    $sample: { size: 3 }
                }
            ])

            if (!arr) {
                res.status(404).send({ statusCode: 404, message: "Data not found" })
            } else {
                await setCache(req, { seriesDetails: arr, similarSeries, books: getBooks })
                res.send({ seriesDetails: arr, similarSeries, books: getBooks });
            }
        }
    } catch (err) {
        res.send(err)
    }
}