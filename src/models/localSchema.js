import mongoose from "mongoose";

const authors = new mongoose.Schema({
    _id: String
})


mongoose.models = {};

const bookSlugs = mongoose.model("slugs", authors);
export default bookSlugs;