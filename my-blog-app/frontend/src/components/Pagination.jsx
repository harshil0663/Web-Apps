import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {"<"}
      </button>
      <span>{page}</span>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
