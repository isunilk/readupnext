import seriesAuthors from "../../models/series_authorsSchema";
import dbConnect from "../../utils/dbCon";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            let start = 0 + (req.query.page * 50);
            const arr = await seriesAuthors.find({}).sort({ name: 1 }).skip(start).limit(50)        // const arr = await .find().skip(start).limit(50);
            await setCache(req, arr)
            res.send(arr)
        }
    } catch (err) {
        res.send(err)
    }
}