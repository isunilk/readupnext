import dbConnect from "../../utils/dbCon";
import Blog from "../../models/blogSchema";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            let query = req.query.title;
            if (query) {
                let blogItem = await Blog.find({ title: query })

                res.send(blogItem);
            } else {
                let blog = await Blog.aggregate([
                    {
                        $match: {}
                    },
                    {
                        $sort: { date: -1 }
                    }
                ]);
                await setCache(req, blog)
                res.send(blog);
            }
        }
    } catch (err) {
        console.log(err);
    }
}