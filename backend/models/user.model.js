import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    profilePicture: {
        type: String,
        default: "https://res.cloudinary.com/ ",
    },
});

const User = mongoose.model("User", userSchema);

export default User;