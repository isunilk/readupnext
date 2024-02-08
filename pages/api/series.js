import series_name from "../../models/series_name";
import dbConnect from "../../utils/dbCon";

export default async function handler(req, res) {
    try {
        await dbConnect();
        let start = 0 + (req.query.page * 50);
        const arr = await series_name.find({}).skip(start).limit(50)        // const arr = await .find().skip(start).limit(50);
        res.send(arr)
    } catch (err) {
        res.send(err)
    }
}