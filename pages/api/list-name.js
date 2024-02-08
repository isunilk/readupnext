import dbConnect from "../../utils/dbCon"
import { shortList } from "./controler/controler"

export default async function handler(req, res){
    try {
        let data = await shortList()
        res.send(data)
    } catch (err) {
        console.log(err)
    }
}