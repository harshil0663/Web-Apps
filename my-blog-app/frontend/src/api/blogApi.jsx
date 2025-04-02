import axios from "axios";

export const fetchBlogs = async (page, limit, search) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/blogs?page=${page}&limit=${limit}&search=${search}`
  );
  return data;
};
