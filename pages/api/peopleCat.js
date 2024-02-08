import dbConnect from "../../utils/dbCon";
import Author from "../../models/authorSchema";

export default async function handler(req, res) {
    try{
        await dbConnect();
        let query = req.query.category;

        let getpeople = await Author.find({category:{$in:[query]}})
        res.status(200).send(getpeople);
    }catch(err){
        console.log(err)
    }
}