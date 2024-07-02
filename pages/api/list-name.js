import dbConnect from "../../utils/dbCon"
import { shortList } from "./controler/controler"
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            let data = await shortList()
            await setCache(req, data)
            res.send(data)
        }
    } catch (err) {
        console.log(err)
    }
}