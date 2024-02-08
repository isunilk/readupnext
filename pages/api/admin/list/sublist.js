import { authenticat } from "../../../../lib/authenticat";
import bookSchema from "../../../../models/bookSchema";
import listSchema from "../../../../models/listSchema";
import dbConnect from "../../../../utils/dbCon"

export default async function handler(req, res) {
    try {
        await dbConnect();
        switch (req.method) {
            case "GET": {
                let token = req.headers.authorization.trim().split(" ")[1]
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" })

                let booksCategory = req.query.list.trim().split(' ');
                booksCategory.pop();
                booksCategory.shift();
                let newCat = ""
                for (var i = 0; i < booksCategory.length; i++) {
                    newCat += booksCategory[i] + " "
                }

                let sublistArr = await listSchema.findOne({ Best_Book_List: req.query.list })
                let books = await bookSchema.find({ category_name: newCat.substring(0, newCat.length - 1) }).sort({ title: 1 })
                res.status(200).json({ sublistArr, books });
                break
            }
            case "DELETE": {
                break;
            }
            case "PUT": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });

                const { data, id, opration, category_name } = req.body;
                if (opration === 'move') {
                    let move = await listSchema.updateOne({ _id: id }, { $set: { category: data.category, lastModified: new Date().toISOString() } })
                    res.status(200).json({ message: "Sublist Move Succesfully" })
                } else {
                    let update = await listSchema.updateOne({ _id: id }, {
                        $set: {
                            Best_Book_List: data.Best_Book_List,
                            imgArr: data.imgArr,
                            metaDescription: data.metaDescription,
                            questions_answers: data.questions_answers,
                            lastModified: new Date().toISOString()
                        }
                    })
                    if (category_name) {
                        let updateBooks = await bookSchema.updateMany({ category_name: category_name.oldCategory }, { $set: { category_name: category_name.newCategory, lastModified: new Date().toISOString() } })
                    }
                    res.status(200).json({ message: "Sublist Updated Succesfully" })
                }
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