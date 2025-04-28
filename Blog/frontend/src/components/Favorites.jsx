import React from "react";

const Favorites = ({ show, setShow }) => {
  return (
    <button
      onClick={() => setShow((prev) => !prev)}
      className="bg-blue-500 text-white px-2 py-1 rounded"
    >
      {show ? "Show All" : "Show Favorites"}
    </button>
  );
};

export default Favorites;
