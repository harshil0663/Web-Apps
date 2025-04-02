const Blog = require('../models/blogModel');

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Store multiple blogs
const storeBlogs = async (req, res) => {
  try {
    const blogs = req.body; // Expecting an array of blog objects
    await Blog.insertMany(blogs);
    res.status(201).json({ message: 'Blogs stored successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error storing blogs', error: error.message });
  }
};

module.exports = { getBlogs, storeBlogs };
