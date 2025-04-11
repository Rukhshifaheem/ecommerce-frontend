import { useState, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "./shopContext.jsx"; // Import the context
import Cookies from "js-cookie"; // Import js-cookie for cookie management

// Function to get the default cart
const getDefaultCart = (products) => {
    return products.reduce((cart, product) => ({ ...cart, [product._id]: 0 }), {});
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [all_products, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://backend-rukhshifaheems-projects.vercel.app/product/allProducts");
                setAllProducts(response.data);

                // Load cart from localStorage or initialize it
                const initialCartState = JSON.parse(localStorage.getItem("cart")) || getDefaultCart(response.data);
                setCartItems(initialCartState);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Save cart to localStorage on every change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = async (itemId) => {
        const token = Cookies.get("token"); // Get token from cookies
        console.log(token);
        if (!token) {
            console.error("No token found!");
            return;
        }

        try {
            const response = await axios.post(
                "http://backend-rukhshifaheems-projects.vercel.app/cart/addToCart",
                { itemId, quantity: 1 },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the token from cookies
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Item added to cart:", response.data);

            // Update local cart state
            setCartItems((prev) => {
                const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
                return updatedCart;
            });
        } catch (error) {
            console.error("Error adding item to cart:", error.response?.data || error);
        }
    };

    const removeFromCart = async (itemId) => {
        const token = Cookies.get("token"); // Get token from cookies
        console.log(token);
        if (!token) {
            console.error("No token found!");
            return;
        }

        try {
            // Remove item from backend cart
            const response = await axios.post(
                "http://backend-rukhshifaheems-projects.vercel.app/cart/removeFromCart",
                { itemId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the token from cookies
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Item removed from cart:", response.data);

            // Update local cart state
            setCartItems((prev) => {
                const updatedCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
                return updatedCart;
            });
        } catch (error) {
            console.error("Error removing item from cart:", error.response?.data || error);
        }
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
    };

    const contextValue = { getTotalCartItems, all_products, cartItems, addToCart, removeFromCart, getDefaultCart };

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
