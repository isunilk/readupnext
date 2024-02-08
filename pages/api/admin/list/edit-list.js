import bookSchema from "../../../../models/bookSchema";
import listSchema from "../../../../models/listSchema";
import dbConnect from "../../../../utils/dbCon"
import { authenticat } from "../../../../lib/authenticat";

export default async function handler(req, res) {
    try {
        await dbConnect();
        switch (req.method) {
            case "GET": {
                let sublistArr = await listSchema.find({ category: req.query.list }).sort({ Best_Book_List: 1 })
                res.status(200).json({ sublistArr });
                break
            }
            case "DELETE": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });

                let booksCategory = req.body.listName.trim().split(' ');
                booksCategory.pop()
                booksCategory.shift()

                let newCat = ""
                for (var i = 0; i < booksCategory.length; i++) {
                    newCat += booksCategory[i] + " "
                }

                // let books = await bookSchema.deleteMany({category_name: newCat.substring(0, newCat.length - 1)})
                // let deleteList = await listSchema.deleteOne({_id: req.body.id})
                res.status(200).json({ message: "Sublist Deleted Succesfully" })
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