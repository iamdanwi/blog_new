import express from "express";
import {
  createComment,
  getCommentsByBlog,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/blog/:blogId", getCommentsByBlog); // public
router.post("/blog/:blogId", authenticate, createComment); // private
router.put("/:commentId", authenticate, updateComment); // private (owner only)
router.delete("/:commentId", authenticate, deleteComment); // private (owner only)

export default router;
