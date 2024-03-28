import { PaginationProps } from "@/typescript/interfaces";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex flex-wrap justify-start my-10">
      <button
        className="bg-white text-blue-600 border border-blue-600 px-3 py-1 rounded-md mr-2 text-sm md:px-4 md:py-2"
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <button
        className={`px-3 py-1 rounded-md mr-2 ${
          currentPage === 1
            ? "bg-blue-500 text-white  border border-blue-600"
            : "bg-white text-blue-600 border border-blue-600"
        } text-sm md:px-4 md:py-2`}
      >
        1
      </button>
      <button className="px-3 py-1 rounded-md mr-2 bg-white text-blue-600 border border-blue-500 text-sm md:px-4 md:py-2">
        2
      </button>
      <button className="px-3 py-1 rounded-md mr-2 bg-white text-blue-600 border border-blue-500 text-sm md:px-4 md:py-2">
        3
      </button>
      <span className="px-3 py-1 mr-2 text-gray-600 border border-blue-500 rounded-md text-sm md:px-4 md:py-2">
        {"..."}
      </span>
      <button className="px-3 py-1 rounded-md mr-2 bg-white text-blue-600 border border-blue-500 text-sm md:px-4 md:py-2">
        9
      </button>
      <button className="px-3 py-1 rounded-md mr-2 bg-white text-blue-600 border border-blue-500 text-sm md:px-4 md:py-2">
        10
      </button>
      <button className="bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded-md mr-2 text-sm md:px-4 md:py-2">
        {" >"}
      </button>
    </div>
  );
};

export default Pagination;
