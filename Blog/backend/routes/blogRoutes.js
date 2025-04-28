const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET blogs with pagination and optional search
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search || "";

  const query = search
    ? { title: { $regex: search, $options: "i" } }
    : {};

  try {
    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      blogs,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalBlogs: total,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// GET /api/blogs/favorites - return favorite blogs with pagination and search
router.get("/favorites", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const filter = {
      favorite: true,
      title: { $regex: search, $options: "i" },
    };

    const totalBlogs = await Blog.countDocuments(filter);
    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      blogs,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      totalBlogs,
    });
  } catch (error) {
    console.error("Error fetching favorite blogs:", error);
    res.status(500).json({ message: "Failed to fetch favorite blogs" });
  }
});

// PATCH for toggling favorite (already working)
router.patch("/:id/favorite", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.favorite = !blog.favorite;
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Failed to update favorite" });
  }
});

module.exports = router;
