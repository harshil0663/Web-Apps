const express = require('express');
const { getBlogs, storeBlogs } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getBlogs);
router.post('/store', storeBlogs);

module.exports = router;
