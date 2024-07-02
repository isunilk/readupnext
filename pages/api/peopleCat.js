import dbConnect from "../../utils/dbCon";
import Author from "../../models/authorSchema";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try{
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
        await dbConnect();
        let query = req.query.category;

        let getpeople = await Author.find({category:{$in:[query]}})
        await setCache(req, getpeople)
        res.status(200).send(getpeople);
        }
    }catch(err){
        console.log(err)
    }
}