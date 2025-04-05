import { useContext } from "react";
import { ShopContext } from "../context/shopContext.jsx";
import { FiChevronDown } from "react-icons/fi";
import Item from "../components/Item/Item.jsx";

const ShopCategory = (props) => {
  const { all_products = [] } = useContext(ShopContext);

  return (
    <div className="pt-16 px-4 md:px-8 flex flex-col items-center">
      {/* Container with max width */}
      <div className="w-full max-w-7xl">
        {/* Banner Image */}
        <img src={props.banner} alt="Category Banner" className="w-full h-auto mb-6" />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-lg font-medium">
            <span className="font-bold">Showing 1 - 12</span> out of 36 Products
          </p>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md">
            Sort by <FiChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {all_products
            .filter((item) => item.category === props.category)
            .map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-24">
          <button className="px-7 py-2 bg-gray-200 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-100 transition">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
