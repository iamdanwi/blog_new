import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";


// Create a blog
export const createBlog = async (req, res) => {
    const { title, description, image } = req.body;
    const userId = req.user.id;
    try {
        const newBlog = new Blog({
            title,
            description,
            image,
            user: userId,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate("user", "name email")
            .populate("comments")
            .sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate("user", "name email")
            .populate("comments");
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update blog
export const updateBlog = async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        blog.title = title || blog.title;
        blog.description = description || blog.description;
        blog.image = image || blog.image;

        await blog.save();
        res.status(200).json({ message: "Blog updated", blog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete blog
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await blog.remove();
        res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Like or Unlike blog
export const toggleLike = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const userId = req.user.id;
        const alreadyLiked = blog.likes.includes(userId);

        if (alreadyLiked) {
            blog.likes = blog.likes.filter(id => id.toString() !== userId);
        } else {
            blog.likes.push(userId);
        }

        await blog.save();
        res.status(200).json({ message: alreadyLiked ? "Unliked" : "Liked" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add comment to blog
export const addComment = async (req, res) => {
    const { text } = req.body;
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const newComment = new Comment({
            text,
            user: req.user.id,
            blog: blog._id,
        });

        await newComment.save();

        blog.comments.push(newComment._id);
        await blog.save();

        res.status(201).json({ message: "Comment added", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
