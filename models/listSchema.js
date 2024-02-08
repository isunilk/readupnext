import mongoose from "mongoose"

const list = new mongoose.Schema({
    Best_Book_List: String,
    category: String,
    metaDescription: String,
    count: Number,
    imgArr: Array,
    questions_answers: Object,
    lastModified: Date
    
})

mongoose.models = {};
export default mongoose.model("Books_Category", list)