import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button
        onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        disabled={page === totalPages}
        className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
