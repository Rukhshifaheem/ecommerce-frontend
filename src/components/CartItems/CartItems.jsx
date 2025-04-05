import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { FaTrash } from "react-icons/fa";

const CartItems = () => {
    const { all_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    // Calculate total price
    const subtotal = all_products.reduce((acc, product) => {
        return acc + (cartItems[product._id] > 0 ? product.new_price * cartItems[product._id] : 0);
    }, 0);

    return (
        <div className="max-w-7xl mx-auto mt-20 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-6 bg-gray-200 p-2 font-semibold text-gray-700 text-center">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr className="my-4" />

            {/* Cart Items */}
            {all_products
                .filter((product) => cartItems[product._id] > 0)
                .map((product) => (
                    <div key={product._id} className="grid grid-cols-1 md:grid-cols-6 items-center p-4 border-b text-center">
                        <div className="flex justify-center md:block">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mx-auto" />
                        </div>
                        <p className="mt-2 md:mt-0">{product.name}</p>
                        <p className="text-gray-700 mt-2 md:mt-0">${product.new_price}</p>
                        <div className="flex items-center justify-center gap-2 mt-2 md:mt-0">
                            <button onClick={() => removeFromCart(product._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700">-</button>
                            <p className="w-8 text-center">{cartItems[product._id]}</p>
                            <button onClick={() => addToCart(product._id)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700">+</button>
                        </div>
                        <p className="font-semibold mt-2 md:mt-0">${(product.new_price * cartItems[product._id]).toFixed(2)}</p>
                        <FaTrash className="cursor-pointer text-red-500 hover:text-red-700 text-lg mx-auto mt-2 md:mt-0" onClick={() => removeFromCart(product._id, true)} />
                    </div>
                ))}

            {/* Empty Cart Message */}
            {cartItems && Object.keys(cartItems).length > 0 &&
                Object.values(cartItems).every((count) => count === 0) ? (
                <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
            ) : null}
            {/* Cart Totals & Promo Code Section */}
            <div className="max-w-7xl mx-auto mt-10 p-6">
                <div className="flex flex-col lg:flex-row justify-start gap-15">

                    {/* Cart Totals (Left Side) */}
                    <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
                        <div className="flex justify-between border-b py-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b py-2">
                            <span>Shipping Fee</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg py-2">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="mt-6">
                            <button className="bg-red-500 text-white w-full py-2 md:w-80 lg:w-50 md:py-3 lg:py-2 rounded-md hover:bg-red-700 text-sm md:text-xs">
                                PROCEED TO CHECKOUT
                            </button>

                        </div>
                    </div>

                    {/* Promo Code (Right Side) */}
                    <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
                        <label className="block text-gray-600 mb-2">If you have a promo code, enter it here</label>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Promo code"
                                className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
                            />
                            <button className="px-4 bg-black text-white rounded-r hover:bg-gray-800">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CartItems;






























