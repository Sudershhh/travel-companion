import { PaginationProps } from "@/typescript/interfaces";

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className=" flex justify-start my-10">
 <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md mr-2" disabled={currentPage === 1}>{"<"}</button>
      <button className={`px-4 py-2 rounded-md mr-2 ${currentPage === 1 ? 'bg-blue-600 text-white  border border-blue-600' : 'bg-white text-blue-600 border border-blue-600'}`}>1</button>
      <span className="px-4 py-2 mr-2 text-gray-600  border border-blue-600 rounded-md">{"..."}</span>
      <button className="px-4 py-2 rounded-md mr-2 bg-white text-blue-600 border border-blue-600">9</button>
      <button className="px-4 py-2 rounded-md mr-2 bg-white text-blue-600 border border-blue-600">10</button>
      <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md mr-2">{" >"}</button>
    
   
      </div>
    );
  };
  
  export default Pagination;