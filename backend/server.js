import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js"; // ← Missing in your original code
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commentRoutes from "./routes/comment.routes.js";

dotenv.config();
connectDB(); // ← You must call this to connect MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running properly");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

export default app;
