const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  body: String,
  favorite: { type: Boolean, default: false }, // <-- use only this
});

module.exports = mongoose.model("Blog", blogSchema);
