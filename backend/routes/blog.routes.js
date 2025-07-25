import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  toggleLike,
  addComment,
} from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllBlogs);                 // public
router.get("/:id", getBlogById);              // public
router.post("/", authenticate, createBlog);   // private
router.put("/:id", authenticate, updateBlog); // private (owner only)
router.delete("/:id", authenticate, deleteBlog); // private (owner only)
router.put("/:id/like", authenticate, toggleLike); // private
router.post("/:id/comment", authenticate, addComment); // private

export default router;
