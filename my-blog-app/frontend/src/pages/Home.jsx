import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs") // Fetch from backend
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // Filter & Paginate Blogs
  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice((currentPage - 1) * perPage, currentPage * perPage);

  const addToFavorites = (blog) => {
    if (!favorites.some((fav) => fav.id === blog.id)) {
      setFavorites([...favorites, blog]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Movies</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog Grid */}
      <div className="grid grid-cols-5 gap-4">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onAddToFavorites={addToFavorites} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          className="border px-4 py-2"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          {"<"}
        </button>
        <span>{currentPage}</span>
        <button
          className="border px-4 py-2"
          onClick={() =>
            setCurrentPage((prev) =>
              prev * perPage < blogs.length ? prev + 1 : prev
            )
          }
        >
          {">"}
        </button>
      </div>

      {/* Per Page Limit */}
      <div className="flex justify-center items-center mt-4">
        <span>Per page limit: </span>
        <input
          type="number"
          className="border ml-2 p-2 w-16"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        />
      </div>

      {/* Favorite Button */}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Favorite Blogs ({favorites.length})
      </button>
    </div>
  );
};

export default Home;
