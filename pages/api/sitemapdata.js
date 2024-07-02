import bookSchema from "../../models/bookSchema";
import listSchema from "../../models/listSchema";
import dbConnect from "../../utils/dbCon";
// import { onscroll } from "./controler/controler";
import { bookListSearch } from "./controler/controler";
import { setCache, getCache, giveCacheData } from "./controler/controler"

export default async function handler(req, res) {
    try {
        if (await getCache(req)) {
            return res.status(200).send(await giveCacheData(req))
        } else {
            await dbConnect();
            // console.log(req.query)
            switch (req.query.get) {
                case "sublist": {
                    let list = await listSchema.aggregate([
                        {
                            $match: {},
                        },
                        {
                            $group: { _id: "$Best_Book_List", lastModified: { $addToSet: "$lastModified" } }
                        }
                    ])
                    await setCache(req, { list })
                    res.status(200).json({ list })
                    break;
                }
                case "sublistBooks": {
                    let booksSlug = await bookSchema.aggregate([
                        {
                            $match: {},
                        },
                        {
                            $group: { _id: "$slug", lastModified: { $addToSet: "$lastModified" } }
                        }
                    ])
                    await setCache(req, { booksSlug })
                    res.status(200).json({ booksSlug });
                    break;
                }
                default: {
                    res.status(400).json({ message: "Not! able to process request" })
                }
            }
        }
    } catch (err) {
        res.send(err)
    }
}