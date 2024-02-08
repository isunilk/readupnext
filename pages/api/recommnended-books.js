import dbConnect from "../../utils/dbCon";
import { recommend_search } from "./controler/controler";

export default async function handler(req, res) {
    try {
        await dbConnect()
        let data = await recommend_search(req.query.name);
        if (!data) {
            res.status(404).send({ statusCode: 404, message: "Data not found" });
        } else {
            res.status(200).send(data)
        }
    } catch (err) {
        console.log(err)
    }
}