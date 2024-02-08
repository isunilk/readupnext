import dbConnect from "../../utils/dbCon";
import { onscroll } from "./controler/controler";
import { bookListSearch } from "./controler/controler";

export default async function handler(req, res){
    try {
        await dbConnect();
        // console.log(req.query)
        if (req.query.page) {
            let data = await onscroll(req.query.page);
            res.send(data);
        } else {
            let data = await bookListSearch(req.query.category)
            res.send(data);
        }
        console.log(req.query.category)
    } catch (err) {
        res.send(err)
    }
}