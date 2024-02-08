import mongoose from "mongoose"

const recommended_books = new mongoose.Schema({
    recommender: {
        booksCount: Number,
        imageUrl: String,
        name: String,
        bio: String,
        wikipediaLink: String,
        twitterHandle: String,
        instagramHandle: String,
        youtubeHandle: String,
        youtubeHandle: String,
        slug: String,
        id: Number,
        verified: Boolean,
        website: String,
        metadata: Object,
        writtenMetadata: Object
    },
    books: Array
})

mongoose.models = {};
export default mongoose.model("Recommended_book", recommended_books);