import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search blogs by title..."
      className="border px-4 py-2 rounded w-full md:w-1/3"
    />
  );
};

export default SearchBar;
