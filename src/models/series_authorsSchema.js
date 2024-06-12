// import { metadata } from "@/app/layout";
import mongoose from "mongoose";

const series_authors = new mongoose.Schema({
    name: String,
    slug: String,
    imageURL: String,
    booksCount: Number,
    category:Array,
    bio:String,
    metadata:{
        title:String,
        h1:String,
        description:String,
        questions_answers:Object
    }
})


mongoose.models = {};

const seriesAuthors = mongoose.model("series_author_names", series_authors);
export default seriesAuthors;