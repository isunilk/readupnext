import Author from "../../../models/authorSchema";
import bookSchema from "../../../models/bookSchema";
import listSchema from "../../../models/listSchema";
import recomSchema from "../../../models/recomSchema";
import seriesSchema from "../../../models/seriesSchema";
import dbConnect from "../../../utils/dbCon";


export const search = async (input) => {
    try {
        let titleSearch = await Books.find({ slug: input })
        if (titleSearch.length > 0) {
            return (titleSearch);
        } else {
            let autherSearch = await Books.find({ authorName: input })
            if (autherSearch.length > 0) {
                return (autherSearch);
            } else {
                let categorySearch = await Books.find({ category_name: input })
                return (categorySearch);
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const seriesShorting = async (input) => {
    try {
        let reges = new RegExp("^" + input, "i")
        let data = await seriesSchema.aggregate([
            {
                $match: { series_name: reges }
            },
            {
                $group: { _id: "$series_name", count: { $sum: 1 }, imgArr: { $push: "$BookimageUrl" }, series_slug: { $addToSet: "$series_slug" } }
            },
            {
                $sort: { borough: 1, _id: 1 }
            },
            { $project: { _id: 1, count: 1, series_slug: 1, imgArr: { $slice: ["$imgArr", 3] } } }
        ])
        return data;
    } catch (err) {
        console.log(err)
    }
}


export const shortList = async () => {
    try {

        await dbConnect();
        let list = await listSchema.aggregate([
            {
                $match:{}
            },
            {
                $group:{_id:"$category"}
            },         
            {
                $sort:{_id:1}
            }
        ]);
        
        return list;
    } catch (err) {
        console.log(err)
    }
}

export const onscroll = async (page) => {
    try {

        let start = 0 + (page * 50);
        let data = await listSchema.find({}).sort({Best_Book_List:1}).skip(start).limit(50);
        return data;

    } catch (err) {
        console.log(err)
    }
}


export const bookListSearch = async (categoryName) => {
    try {

        let data = await listSchema.find({ category: categoryName }).sort({Best_Book_List:1});
        return data;

    } catch (err) {
        console.log(err)
    }
}


export const recommend_search = async (search) => {
    try {

        let data = await recomSchema.findOne({ 'recommender.slug': search });
        let otherPeople = await Author.aggregate([
            {
                $sample: { size: 4 }
            }
        ]);

        if(!data){
            return false;
        }
        return [data,otherPeople];
    } catch (err) {
        console.log(err)
    }
}


