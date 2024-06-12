import mongoose from "mongoose";

const quotes = new mongoose.Schema({
    QUOTE: String,
    AUTHOR: String,
    TITLE: String,
    LIKES: Number,
    TAGES: String
})


mongoose.models = {};

const Quotes = mongoose.model("quotes", quotes);
export default Quotes;