
import listSchema from "../../../../models/listSchema"
import bookSchema from "../../../../models/bookSchema";
import dbConnect from "../../../../utils/dbCon";
import { authenticat } from "../../../../lib/authenticat";
import { shortList } from "../../controler/controler";

export default async function handler(req, res) {
    try {
        await dbConnect();
        switch (req.method) {
            case "GET": {
                let token = req.headers.authorization.trim().split(" ")[1]
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" })
                let data = await shortList();
                res.status(200).json(data)
                break;
            }
            case "PUT": {

                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });

                let { oldName, newName } = req.body;
                if (oldName, newName) {
                    let update = await listSchema.updateMany({ category: oldName }, { $set: { category: newName, lastModified:new Date().toISOString() } });
                    // if (update.acknowledged) {
                    res.status(200).json({ message: "List Name Change Succesfully" });
                    // } else {
                    //     res.status(400).send("Server are not able to process")
                    // }
                } else {
                    res.status(422).json({ message: "Invalid Input!" })
                }
                break;
            }
            case "POST": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });
                let { Best_Book_List, category, metaDescription, count, imgArr, questions_answers } = req.body.sublist;
                let { title, subtitle, authorName, category_name, rating, reviewCount, slug, yearPublished, buyLink, BookimageUrl, articles, expertRecommenders } = req.body.book

                let newSublist = new listSchema({ Best_Book_List, category, metaDescription, count: 1, imgArr, questions_answers,lastModified: new Date().toISOString() })
                await newSublist.save();
                let newBook = new bookSchema({ __typename: "Book", seriesUrl: null, quote: null, title, subtitle, authorName, category_name, rating, reviewCount, slug, yearPublished, buyLink, BookimageUrl, articles, expertRecommenders, lastModified: new Date().toISOString() })
                await newBook.save();
                res.status(200).json({ message: "Data Save Succesfully" })
                break;
            }
            default: {
                res.status(400).json({ message: "Wrong URL" })
            }
        }
    } catch (err) {
        res.status(500).json({ message: "Some error occurred" })
    }
}