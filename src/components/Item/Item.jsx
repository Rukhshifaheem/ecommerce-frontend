import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-[1.02]">
      {/* Image */}
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full h-64 object-contain rounded-lg mb-4 transition-transform duration-200 hover:scale-105"
        />
      </Link>

      {/* Product Name */}
      <p className="text-sm text-gray-700 text-center">
        {props.name}
      </p>

      {/* Prices */}
      <div className="flex items-center gap-2 mt-2">
        <div className="text-lg font-bold text-black">${props.new_price}</div>
        <div className="text-sm text-gray-500 line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
