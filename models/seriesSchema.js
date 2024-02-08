import mongoose from "mongoose";

const series = new mongoose.Schema({
    series_slug: String,
    books: [{
        authorName: String,
        buyLink: String,
        asin: String,
        BookimageUrl: String,
        yearPublished: String,
        subtitle: String,
        title: String,
        quote: String,
        id: String,
        slug: String,
        articles: Array,
        rating: Number,
        reviewCount: Number,
        seriesUrl: String,
        expertRecommenders: Array,
        __typename: String,
        series_name: String,
        series_slug: String,
        recommenders: Array,
    }]
})

mongoose.models = {};

export default mongoose.model("Series", series);