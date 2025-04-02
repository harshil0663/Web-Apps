import React from "react";

const PerPageLimit = ({ perPage, setPerPage }) => {
  return (
    <input
      type="number"
      value={perPage}
      onChange={(e) => setPerPage(Number(e.target.value))}
      className="border rounded-md p-2 w-16"
    />
  );
};

export default PerPageLimit;
