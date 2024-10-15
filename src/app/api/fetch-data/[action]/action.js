import Author from "@/models/authorSchema"
import bookSchema from "@/models/bookSchema"
import listSchema from "@/models/listSchema"
import recomSchema from "@/models/recomSchema"
import SeriesAuthorBooks from "@/models/seriesAuthorBooksSchema"
import seriesSchema from "@/models/seriesSchema"
import seriesAuthors from "@/models/series_authorsSchema"
import series_name from "@/models/series_name"
import { getCache, giveCacheData, setCache } from "../../common"
// import authorSchema from "../../models/authorSchema";

export const home_people = async () => {
    const keyName = "home_people"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let agg = [{ $limit: 9 }]
        let data = await Author.aggregate(agg)
        await setCache(keyName, data)
        return data
    }
}

export const home_author = async (page) => {
    const keyName = "home_author"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let agg = [{ $limit: 9 }]
        let data = await seriesAuthors.aggregate(agg)
        await setCache(keyName, data)
        return data
    }
}

export const peoples = async (page, filter) => {
    let keyName = page + "peoples"
    if (filter) {
        keyName = page + "peoples" + filter
        if (await getCache(keyName)) {
            return await giveCacheData(keyName)
        } else {
            let data = await Author.find({ category: { $in: [filter] } })
            await setCache(keyName, data)
            return data
        }
    }
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let start = 0 + (page * 50);
        let data = await Author.find().skip(start).limit(10)
        await setCache(keyName, data)
        return data
    }
}

export const author = async (page) => {
    const keyName = "author" + page
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let start = 0 + (page * 50);
        const agg = [{ $skip: start }, { $limit: 10 }]
        let data = await seriesAuthors.aggregate(agg)
        await setCache(keyName, data)
        return data
    }
}

export const series = async (page) => {
    const keyName = "series" + page
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let start = 0 + (page * 50);
        const agg = [{ $skip: start }, { $limit: 10 }]
        let data = await series_name.aggregate(agg)
        await setCache(keyName, data)
        return data
    }
}

export const listName = async () => {
    const keyName = "listName"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
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
        await setCache(keyName, list)
        return list;
    }
}

export const list = async (page, filter) => {
    let keyName = page + "peoples"
    if (filter) {
        keyName = page + "peoples" + filter
        if (await getCache(keyName)) {
            return await giveCacheData(keyName)
        } else {
            let data = await listSchema.find({ category: filter }).sort({ Best_Book_List: 1 })
            await setCache(keyName, data)
            return data
        }
    }
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let start = 0 + (page * 50);
        let data = await listSchema.find().sort({ Best_Book_List: 1 }).skip(start).limit(10)
        await setCache(keyName, data)
        return data
    }
}

//  =====================Internal Page ==========================

export const peopleInternal = async (slug) => {
    const keyName = slug + "peopleInternal"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let data = await recomSchema.findOne({ 'recommender.slug': slug });
        let otherPeople = await Author.aggregate([
            {
                $sample: { size: 4 }
            }
        ]);

        if (!data) {
            return false;
        }
        const data1 = { data: data._doc, otherPeople }
        await setCache(keyName, data1)
        return { data, otherPeople };
    }
}

async function similarCategory(query) {
    const keyName = "similarCategory" + query
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
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

            await setCache(keyName, { similarCategory, searchCategory: searchCategory[0] })
            return { similarCategory, searchCategory: searchCategory[0] }
        } else {
            return false
        }
    }
}

export const listInternal = async (slug) => {
    const keyName = slug + "listInternal"
    if (await getCache(keyName)) {
        console.log("111111");

        return await giveCacheData(keyName)
    } else {
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
                console.log("222222");
                await setCache(keyName, { similarCategories, getData: getData })
                return { similarCategories, getData }
            }
        }
    }
}

export const seriesInternal = async (slug) => {
    const keyName = slug + "seriesInternal"
    if (await getCache(keyName)) {

        return await giveCacheData(keyName)
    } else {
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

            await setCache(keyName, { seriesDetails: arr._doc, similarSeries, books: getBooks })
            return { seriesDetails: arr, similarSeries, books: getBooks };
        }
    }
}

export const authorInternal = async (slug) => {
    const keyName = slug + "authorInternal"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
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
            await setCache(keyName, { authorDetails: arr._doc, otherAuthor, books: getBooks })
            return { authorDetails: arr, otherAuthor: otherAuthor, books: getBooks };
        } else {
            return false;
        }
    }
}

export const books = async (slug) => {
    const keyName = slug + "books"
    if (await getCache(keyName)) {
        return await giveCacheData(keyName)
    } else {
        let data = await bookSchema.findOne({ slug: slug });
        let similarBooks;
        if (data) {
            similarBooks = await bookSchema.find({ category_name: data.category_name });
            await setCache(keyName, { data, similarBooks })
            return { data, similarBooks }
        } else {
            data = await seriesSchema.findOne({ slug: slug });
            if (data) {
                similarBooks = await seriesSchema.find({ series_slug: data.series_slug });
                await setCache(keyName, { data, similarBooks })
                return { data, similarBooks }
            }
            else {
                data = await SeriesAuthorBooks.findOne({ slug: slug });
                if (!data) {
                    return { statusCode: 404, message: "Data not found" };
                } else {
                    similarBooks = await SeriesAuthorBooks.find({ series_slug: data.series_slug })
                    await setCache(keyName, { data, similarBooks })
                    return { data, similarBooks }
                }
            }
        }
    }
}