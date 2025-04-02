import { useState } from "react";

const BlogCard = ({ blog, onAddToFavorites }) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className="border rounded-lg p-4 w-60 shadow-md bg-white">
      <h3 className="font-bold text-lg">{blog.title}</h3>
      {showBody && <p className="text-sm text-gray-600 mt-2">{blog.body}</p>}
      <div className="flex justify-between items-center mt-4">
        <button
          className="text-blue-500 text-sm"
          onClick={() => setShowBody(!showBody)}
        >
          {showBody ? "Hide" : "About"}
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          onClick={() => onAddToFavorites(blog)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
