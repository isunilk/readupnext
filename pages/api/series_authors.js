import seriesAuthors from "../../models/series_authorsSchema";
import dbConnect from "../../utils/dbCon";

export default async function handler(req, res) {
    try {
        await dbConnect();
        let start = 0 + (req.query.page * 50);
        const arr = await seriesAuthors.find({}).sort({name:1}).skip(start).limit(50)        // const arr = await .find().skip(start).limit(50);
        res.send(arr)
    } catch (err) {
        res.send(err)
    }
}