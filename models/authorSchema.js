import mongoose from "mongoose";

const authors = new mongoose.Schema({
    Author_Name: String,
    Author_No_of_Books: String,
    Author_Photo: String
})


mongoose.models = {};

const Author = mongoose.model("Author", authors);
export default Author;