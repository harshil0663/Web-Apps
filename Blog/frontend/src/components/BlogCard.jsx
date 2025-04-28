import React from "react";

const BlogCard = ({ blog, toggleFavorite }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold">{blog.title}</h2>
        <button
          onClick={() => toggleFavorite(blog._id, blog.favorite)}
          className={`text-lg px-2 rounded ${
            blog.favorite ? "bg-yellow-300" : "bg-gray-200"
          }`}
        >
          {blog.favorite ? "-" : "+"}
        </button>
      </div>
      <p className="mt-2">{blog.body}</p>
    </div>
  );
};

export default BlogCard;
