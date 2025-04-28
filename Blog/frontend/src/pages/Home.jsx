import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [blogsPerPage, setBlogsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/blogs?page=${page}&limit=${blogsPerPage}&search=${searchTerm}`
      );
      const data = await res.json();
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };
  
  const fetchFavorites = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/blogs/favorites?page=${page}&limit=${blogsPerPage}&search=${searchTerm}`
      );
      const data = await res.json();
      setFavorites(data.blogs);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };
  
  const toggleFavorite = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/blogs/${id}/favorite`,
        { method: "PATCH" }
      );
      const updatedBlog = await res.json();

      if (showFavorites) {
        fetchFavorites();
      } else {
        setBlogs((prev) =>
          prev.map((blog) =>
            blog._id === id ? { ...blog, favorite: updatedBlog.favorite } : blog
          )
        );
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  useEffect(() => {
    if (showFavorites) {
      fetchFavorites();
    } else {
      fetchBlogs();
    }
  }, [page, blogsPerPage, showFavorites, searchTerm]);
  
useEffect(() => {
  setPage(1);
}, [searchTerm]);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = (showFavorites ? favorites : blogs).filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <SearchBar value={searchTerm} onChange={handleSearch} />
        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowFavorites((prev) => !prev);
              setPage(1);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showFavorites ? "Show All Blogs" : "Show Favorites"}
          </button>
          <input
            type="number"
            value={blogsPerPage}
            onChange={(e) => setBlogsPerPage(Number(e.target.value))}
            className="border p-2 rounded w-20"
            min="1"
          />
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}

      {filteredBlogs.length > 0 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Home;
