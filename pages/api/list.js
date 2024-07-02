import dbConnect from "../../utils/dbCon";
import { onscroll } from "./controler/controler";
import { bookListSearch } from "./controler/controler";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            // console.log(req.query)
            if (req.query.page) {
                let data = await onscroll(req.query.page);
                await setCache(req, data)
                res.send(data);
            } else {
                let data = await bookListSearch(req.query.category)
                await setCache(req, data)
                res.send(data);
            }
            console.log(req.query.category)
        }
    } catch (err) {
        res.send(err)
    }
}