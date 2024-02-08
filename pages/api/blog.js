import dbConnect from "../../utils/dbCon";
import Blog from "../../models/blogSchema";


export default async function handler(req, res) {
    try {
        await dbConnect();
        let query = req.query.title;
        if(query){
            let blogItem = await Blog.find({title:query})
            
            res.send(blogItem);
        }else{
            let blog = await Blog.aggregate([
                {
                    $match: {}
                },
                {
                    $sort: { date: -1 }
                }
            ]);
            res.send(blog);
        }
    } catch (err) {
        console.log(err);
    }
}