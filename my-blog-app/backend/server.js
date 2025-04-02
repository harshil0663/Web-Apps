require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());

// Connect to MongoDB
connectDB();

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Blog Routes
const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
