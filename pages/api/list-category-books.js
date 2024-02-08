import bookSchema from "../../models/bookSchema";
import dbConnect from "../../utils/dbCon";
import listSchema from "../../models/listSchema";

async function similarCategory(query) {
    let searchQuery = query.replace(/-/g, " ")
    let regex = new RegExp('^' + searchQuery + '$', 'i')

    let searchCategory = await listSchema.find({ Best_Book_List: regex })

    if (searchCategory.length > 0) {
        let similarCategory = await listSchema.aggregate([
            {
                $match: { category: searchCategory[0].category }
            },
            {
                $sample: { size: 3 }
            }
        ])
        return {similarCategory, searchCategory}
    }else{
        return false
    }


}

export default async function handler(req, res) {
    try {
        await dbConnect();
        let category = req.query.category.trim().split('-')
        category.shift();
        category.pop()

        let str = ''
        category.forEach(elem => {
            str += elem + " ";
        })
        str = str.substring(0, str.length - 1)

        let regex = new RegExp('^' + str + '$', 'i')

        const getData = await bookSchema.find({ category_name: regex });

        if (getData.length <= 0) {
            res.status(404).send({ statusCode: 404, message: "Data not found" })
        }
        else {

            let similarCategories = await similarCategory(req.query.category);

            if(!similarCategories){
                res.status(404).send({ statusCode: 404, message: "Data not found" })
            }else{
                res.send({ similarCategories, getData })
            }
        }


    } catch (err) {
        console.log(err)
    }
}