import Comment from "../models/comment.model.js";
import Blog from "../models/blog.model.js";

// Create a comment
export const createComment = async (req, res) => {
    const { text } = req.body;
    const userId = req.user.id;
    const blogId = req.params.blogId;

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const comment = new Comment({
            text,
            user: userId,
            blog: blogId,
        });

        await comment.save();

        blog.comments.push(comment._id);
        await blog.save();

        res.status(201).json({ message: "Comment added", comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all comments for a blog
export const getCommentsByBlog = async (req, res) => {
    const blogId = req.params.blogId;

    try {
        const comments = await Comment.find({ blog: blogId })
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a comment
export const updateComment = async (req, res) => {
    const commentId = req.params.commentId;
    const { text } = req.body;
    const userId = req.user.id;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        if (comment.user.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        comment.text = text || comment.text;
        await comment.save();

        res.status(200).json({ message: "Comment updated", comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    const userId = req.user.id;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        if (comment.user.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await Comment.findByIdAndDelete(commentId);

        await Blog.findByIdAndUpdate(comment.blog, {
            $pull: { comments: commentId }
        });

        res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
