import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../../assets/Frontend_Assets/logo.png";
import { ShopContext } from "../../context/shopContext";
import Cookies from "js-cookie"; // Import js-cookie

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext); // Get cart items from context
  const navigate = useNavigate();
  const [token, setToken] = useState(Cookies.get("token")); // Get token from cookies

  // Sync token state with cookies on changes
  useEffect(() => {
    const updateToken = () => {
      setToken(Cookies.get("token"));
    };

    window.addEventListener("storage", updateToken);
    return () => window.removeEventListener("storage", updateToken);
  }, []);

  // Ensure token updates when navigating after login/logout
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    setToken(null); // Clear token state
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <NavLink to="/" className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 w-6" />
            <span>SHOPPER</span>
          </NavLink>

          {/* Center - Menu Items (Desktop) */}
          <div className="hidden md:flex md:space-x-8 flex-1 justify-center">
            {["shop", "men", "women", "kids"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-gray-400 text-sm font-medium ${isActive ? "border-b-2 border-red-500 text-red-600" : ""}`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </div>

          {/* Right - Login/Logout & Cart */}
          <div className="flex items-center space-x-6">
            {token ? (
              <button
                onClick={handleLogout}
                className="hidden md:block text-gray-800 hover:text-gray-600 border border-gray-400 px-4 py-1 rounded-full text-sm"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="hidden md:block text-gray-800 hover:text-gray-600 border border-gray-400 px-4 py-1 rounded-full text-sm"
              >
                Login
              </NavLink>
            )}

            <NavLink to="/cart" className="relative text-gray-800 hover:text-gray-600">
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                {token ? getTotalCartItems() : 0}
              </span>
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 bg-white shadow-md py-4">
            {["shop", "men", "women", "kids"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-gray-600 text-sm font-medium ${isActive ? "border-b-2 border-red-500 text-red-600" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}

            {token ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-gray-800 hover:text-gray-600 border border-gray-400 px-4 py-1 rounded-full text-sm"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="text-gray-800 hover:text-gray-600 border border-gray-400 px-4 py-1 rounded-full text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
