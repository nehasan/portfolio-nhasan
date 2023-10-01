import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published_on: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;