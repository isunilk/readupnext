import mongoose from "mongoose";

const series_authors = new mongoose.Schema({
    series_slug: String,
    series_name: String,
    count: Number,
    imgArr: Array
})


mongoose.models = {};

const seriesAuthors = mongoose.model("series_author_names", series_authors);
export default seriesAuthors;