import Author from "@/models/authorSchema";
import bookSchema from "@/models/bookSchema";
import listSchema from "@/models/listSchema";
import seriesAuthors from "@/models/series_authorsSchema";
import series_name from "@/models/series_name";
import dbConnect from "../../../../utils/connection";

export async function POST(req) {
    try {
        await dbConnect();
        let body = await req.json();
        let target = body.searchInput

        let regexExp = new RegExp("^" + target, 'i');
        let books = await bookSchema.aggregate([
            {
                $match: { title: regexExp }
            },
            {
                $group: { _id: "$slug", title: { $addToSet: "$title" }, subTitle: { $addToSet: "$subtitle" } }
            }
        ]);

        let people = await Author.find({ name: regexExp })
        let series = await series_name.aggregate([
            {
                $match: { series_name: regexExp }
            }

        ]);
        let author = await seriesAuthors.find({ name: regexExp })
        let newTarget = target.toLowerCase().replace("best ", "");
        regexExp = new RegExp("^Best " + newTarget, 'i');
        
        let categories = await listSchema.find({ Best_Book_List: regexExp });

        return Response.json({ books, people, series, categories, author });

    } catch (err) {
        console.log(err);
        return Response.json({success:false, message:"Reasult Not Found!"})
    }
}