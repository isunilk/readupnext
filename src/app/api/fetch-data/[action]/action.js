import Author from "@/models/authorSchema"
import bookSchema from "@/models/bookSchema"
import listSchema from "@/models/listSchema"
import recomSchema from "@/models/recomSchema"
import SeriesAuthorBooks from "@/models/seriesAuthorBooksSchema"
import seriesSchema from "@/models/seriesSchema"
import seriesAuthors from "@/models/series_authorsSchema"
import series_name from "@/models/series_name"
// import authorSchema from "../../models/authorSchema";

export const home_people = async () => {
    let data = await Author.find().limit(9)
    return data
}

export const home_author = async (page) => {
    let data = await seriesAuthors.find({}).limit(9)
    // console.log(data[0].metadata)
    return data
}

export const peoples = async (page, fillter) => {

    if (fillter) {
        let data = await Author.find({ category: { $in: [fillter] } })
        return data
    }

    let start = 0 + (page * 50);
    let data = await Author.find().skip(start).limit(10)
    return data
}


export const author = async (page) => {
    let start = 0 + (page * 50);
    let data = await seriesAuthors.find().skip(start).limit(10)
    return data
}

export const series = async (page) => {
    let start = 0 + (page * 50);
    let data = await series_name.find({}).skip(start).limit(10)
    return data
}

export const listName = async () => {
    let list = await listSchema.aggregate([
        {
            $match: {}
        },
        {
            $group: { _id: "$category" }
        },
        {
            $sort: { _id: 1 }
        }
    ]);

    return list;
}

export const list = async (page, fillter) => {

    if (fillter) {
        let data = await listSchema.find({ category: fillter }).sort({ Best_Book_List: 1 })
        return data
    }

    let start = 0 + (page * 50);
    let data = await listSchema.find().sort({ Best_Book_List: 1 }).skip(start).limit(10)
    return data
}











//  =====================Internal Page ==========================

export const peopleInternal = async (slug) => {
    let data = await recomSchema.findOne({ 'recommender.slug': slug });
    let otherPeople = await Author.aggregate([
        {
            $sample: { size: 4 }
        }
    ]);

    if (!data) {
        return false;
    }
    return { data, otherPeople };
}


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
        return { similarCategory, searchCategory: searchCategory[0] }
    } else {
        return false
    }


}

export const listInternal = async (slug) => {
    let category = slug.trim().split('-')
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
        return null
    }
    else {

        let similarCategories = await similarCategory(slug);

        if (!similarCategories) {
            return null

        } else {
            return { similarCategories, getData }
        }
    }
}


export const seriesInternal = async (slug) => {
    let getBooks = await seriesSchema.aggregate([
        {
            $match: { series_slug: slug }
        },
        {
            $sort: { yearPublished: 1 }
        }
    ])
    const arr = await series_name.findOne({ series_slug: slug })
    const similarSeries = await series_name.aggregate([
        {
            $sample: { size: 3 }
        }
    ])

    if (!arr) {
        return false
    } else {
        return { seriesDetails: arr, similarSeries, books: getBooks };
    }
}

export const authorInternal = async (slug) => {

    let getBooks = await SeriesAuthorBooks.aggregate([
        {
            $match: { series_slug: slug }
        },
        {
            $sort: { yearPublished: 1 }
        }
    ])

    const arr = await seriesAuthors.findOne({ slug: slug })
    let otherAuthor = await seriesAuthors.aggregate([
        {
            $sample: { size: 4 }
        }
    ]);

    if (arr !== null) {
        return { authorDetails: arr, otherAuthor: otherAuthor, books: getBooks };
    } else {
        return false;
    }
}



export const books = async (slug) => {
    let data = await bookSchema.findOne({ slug: slug });
    let similarBooks;
    if (data) {
        similarBooks = await bookSchema.find({ category_name: data.category_name });
        return{data, similarBooks }
    } else {
        data = await seriesSchema.findOne({ slug: slug });
        if (data) {

            similarBooks = await seriesSchema.find({ series_slug: data.series_slug });
            return{data, similarBooks }
        }
        else {

            data = await SeriesAuthorBooks.findOne({ slug: slug });

            if (!data) {
                return{ statusCode: 404, message: "Data not found" };

            } else {

                similarBooks = await SeriesAuthorBooks.find({ series_slug: data.series_slug })
                return {data, similarBooks }
            }
        }
    }
}