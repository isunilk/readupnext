import SeriesAuthorBooks from "../../models/seriesAuthorBooksSchema";
import seriesAuthors from "../../models/series_authorsSchema";
import dbConnect from "../../utils/dbCon";


export default async function handler(req, res) {
    try {
        await dbConnect();
        
        let getBooks = await SeriesAuthorBooks.aggregate([
            {
                $match: { series_slug: req.query.name }
            },
            {
                $sort: { yearPublished: 1 }
            }
        ])

        const arr = await seriesAuthors.findOne({ slug: req.query.name })
        let otherAuthor = await seriesAuthors.aggregate([
            {
                $sample: { size: 4 }
            }
        ]);

        if(arr!==null){
            res.send({ authorDetails: arr, otherAuthor: otherAuthor, books: getBooks });
        }else{
            res.status(404).send({statusCode:404, message:"Data not found"})
        }
        // res.send(getBooks);

    } catch (err) {
        res.send(err)
    }
}