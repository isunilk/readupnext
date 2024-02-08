import mongoose from "mongoose"

const sereis_name = new mongoose.Schema({
    _id: String,
    count: Number,
    series_slug: Array,
    imgArr: Array
})

mongoose.models = {};
export default mongoose.model("Series_name", sereis_name)