import bookSchema from "../../models/bookSchema";
import Author from "../../models/authorSchema";
import listSchema from "../../models/listSchema";
import dbConnect from "../../utils/dbCon";
import series_name from "../../models/series_name";
import Blog from "../../models/blogSchema";
import seriesAuthors from "../../models/series_authorsSchema";
import { getCache, giveCacheData, setCache } from "./controler/controler";


export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            let target = req.body.searchInput;

            let regexExp = new RegExp("^" + target, 'i');
            let books = await bookSchema.aggregate([
                {
                    $match : { title: regexExp }
                },
                {
                    $group: {_id: "$slug", title:{$addToSet :"$title"}, subTitle:{$addToSet:"$subtitle"}}
                }
            ]);

            let people = await Author.find({ name: regexExp })
            // let blog = await Blog.find()
            let series = await series_name.aggregate([
                {
                    $match: { series_name: regexExp }
                }
                
            ]);
            let author = await seriesAuthors.find({name : regexExp})
            
            let newTarget = target.toLowerCase().replace("best ", "");
            regexExp = new RegExp("^Best " + newTarget, 'i');

            let categories = await listSchema.find({ Best_Book_List: regexExp });
            let newObj = { books, people, series, categories, author }
            await setCache(req, newObj)
            res.send(newObj);
        }

    } catch (err) {
        console.log(err);
    }
}