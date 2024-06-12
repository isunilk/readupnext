import mongoose from "mongoose";

const series_authors = new mongoose.Schema({
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
})

mongoose.models = {};

const SeriesAuthorBooks = mongoose.model("series_authors", series_authors);
export default SeriesAuthorBooks