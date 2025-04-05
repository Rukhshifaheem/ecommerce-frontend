import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Breadcrum = ({ product }) => {
  
  if (!product) return <p>Loading...</p>;  // Prevents crash when product is undefined

  return (
    <div className="max-w-6xl mx-auto bg-white text-gray-600 text-sm md:text-base px-4 py-3 mt-16">
      <nav className="flex items-center space-x-2">
        <span className="hover:text-black cursor-pointer">HOME</span>
        <FaChevronRight className="text-gray-400 text-xs md:text-sm" />
        <span className="hover:text-black cursor-pointer">SHOP</span>
        <FaChevronRight className="text-gray-400 text-xs md:text-sm" />
        <span className="hover:text-black cursor-pointer">{product.category}</span>
        <FaChevronRight className="text-gray-400 text-xs md:text-sm" />
        <span className="text-black font-medium text-xs md:text-base">{product.name}</span>
      </nav>
    </div>
  );
};

export default Breadcrum;


