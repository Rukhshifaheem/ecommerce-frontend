import { useContext } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ShopContext } from '../../context/shopContext.jsx';
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  console.log(product)
    const { addToCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!product) return;
        addToCart(product._id);
        navigate("/cart");
    };

    // ✅ Handle undefined product to prevent crashes
    if (!product) {
        return <p className="text-center text-gray-500">Loading product details...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Left Section - Images */}
                <div className="flex justify-center">
                    {/* Small Thumbnails */}
                    <div className="flex flex-col justify-between h-96">
                        {product.images?.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={img || "placeholder.jpg"} // ✅ Use different images or fallback
                                alt={product.name}
                                className="w-17 md:w-20 lg:w-22 mt-3 mb-0 md:mt-0 md:mb-3 object-contain cursor-pointer hover:scale-105 transition"
                            />
                        ))}
                    </div>

                    {/* Main Product Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={product.image || "placeholder.jpg"}
                            alt={product.name}
                            className="w-96 object-contain shadow-md"
                        />
                    </div>
                </div>

                {/* Right Section - Product Details */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-semibold">{product.name || "Unknown Product"}</h1>

                    {/* Star Rating */}
                    <div className="flex justify-center md:justify-start items-center mt-2 text-yellow-500">
                        {[...Array(4)].map((_, index) => (
                            <AiFillStar key={index} className="text-xl" />
                        ))}
                        <AiOutlineStar className="text-xl text-gray-400" />
                        <span className="text-gray-500 ml-2 text-sm">(122 Reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-center md:justify-start items-center mt-4">
                        <span className="text-gray-400 text-xl line-through mr-2">${product.originalPrice || "120.5"}</span>
                        <span className="text-blue-600 text-2xl font-bold">${product.price || "85"}</span>
                    </div>

                    <p className="text-gray-600 mt-4">{product.description || "A stylish and comfortable product."}</p>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Select Size</h2>
                        <div className="flex justify-center md:justify-start gap-2 mt-2">
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    className="border px-4 py-2 rounded-md hover:bg-gray-200 transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                        className="mt-6 bg-red-600 text-white py-3 rounded-lg w-full md:w-1/2 mx-auto md:mx-0 hover:bg-red-700 transition"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>

                    {/* Category & Tags */}
                    <div className="mt-4 text-sm text-gray-500">
                        <p><strong>Category:</strong> {product.category || "General"}</p>
                        <p><strong>Tags:</strong> {product.tags?.join(", ") || "Modern, Latest"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
