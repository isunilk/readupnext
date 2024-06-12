import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    authorName: String,
    buyLink: String,
    BookimageUrl: String,
    yearPublished: Number,
    subtitle: String,
    title: String,
    quote: String,
    slug: String,
    articles: Array,
    ogImageByCategory: String,
    rating: Number,
    reviewCount: Number,
    seriesUrl: String,
    expertRecommenders: Array,
    __typename: String,
    category_name: String,
    lastModified: Date,
})

mongoose.models = {};
export default mongoose.model("Book", bookSchema);
