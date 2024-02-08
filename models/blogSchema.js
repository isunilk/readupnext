import mongoose from "mongoose";

const blog = new mongoose.Schema({
    title: String,
    text: String,
    imgUrl: String,
    category: String,
    date: String
})


mongoose.models = {};

const Blog = mongoose.model("blog", blog);
export default Blog;