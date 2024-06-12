import mongoose from "mongoose";

const authors = new mongoose.Schema({
    name: String,
    booksCount:Number,
    imageUrl300:String,
    category: Array,
    slug: String
})


mongoose.models = {};

const Author = mongoose.model("Author", authors);
export default Author;