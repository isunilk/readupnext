import bookSchema from "../../../../models/bookSchema";
import listSchema from "../../../../models/listSchema";
import dbConnect from "../../../../utils/dbCon"
import { authenticat } from "../../../../lib/authenticat";

export default async function handler(req, res) {
    try {
        await dbConnect();
        switch (req.method) {
            case "GET": {

                // if(req.query =="search"){
                let query = new RegExp("^" + req.query.title, 'i')
                let books = await bookSchema.find({ title: query})
                res.status(200).json({books})
                // }
                break
            }
            case "POST": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });

                const { sublistId, data } = req.body;
                let newBook = new bookSchema(data)
                await newBook.save();

                let updateSublist = await listSchema.updateOne({_id:sublistId},{$inc:{count:1}, $set:{lastModified: new Date().toISOString()}} )
                res.status(200).json({ message: "Book Added Succesfully" })
                break;
            }
            case "PUT": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });
                
                const { id, data, listId } = req.body;
                let updateBook = await bookSchema.updateOne({ _id: id }, { $set: data})
                let updateSublist = await listSchema.updateOne({_id:listId},{$set:{lastModified: new Date().toISOString()}} )
                res.status(200).json({ message: "Book Updated Succesfully" })
                break;
            }
            case "DELETE": {
                let token = req.cookies.art_ad
                let auth = await authenticat(token)
                if (!auth) return res.status(401).json({ message: "User Not found!" });

                const{id, sublistId} = req.body

                let deleteBook = await bookSchema.deleteOne({_id:id})
                let updateList = await listSchema.updateOne({_id:sublistId},{$inc:{count:-1}, $set:{lastModified: new Date().toISOString()}})
                res.status(200).json({ message: "Book Deleted Succesfully" })
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