import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border rounded-md p-2 w-full"
    />
  );
};

export default Search;
