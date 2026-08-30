import { useState } from "react";


export function Pagination({ totalPages=3, initialPage=1, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page);
    }
  };

  const baseButtonStyles = "text-xs sm:text-sm px-2.5 py-1 sm:px-3.5 sm:py-2 mx-0.5 sm:mx-1 rounded-lg text-black shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-colors duration-300 inline-block cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff681d] hover:text-white";

  return (
    <div className="mt-10 text-center">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={baseButtonStyles}
        aria-label="صفحه قبلی"
      >
        «
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => handlePageChange(pageNumber)}
            className={`${baseButtonStyles} ${ isActive ? "bg-[#ff681d] text-white" : "" }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={baseButtonStyles}
        aria-label="صفحه بعدی"
      >
        »
      </button>
    </div>
  );
};

