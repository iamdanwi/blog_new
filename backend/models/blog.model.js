import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
}, {
    timestamps: true,
});

const Blog = mongoose.model("Blog", blogSchema)

export default Blog;