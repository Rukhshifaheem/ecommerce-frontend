import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import ShopCategory from "./pages/ShopCategory";
import banner_men from './assets/Frontend_Assets/banner_mens.png';
import banner_women from './assets/Frontend_Assets/banner_women.png';
import banner_kids from './assets/Frontend_Assets/banner_kids.png';
import ProtectedRoute from "./components/ProtectedRoute";  // Import the ProtectedRoute component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/men" element={<ProtectedRoute><ShopCategory banner={banner_men} category='men' /></ProtectedRoute>} />
      <Route path="/women" element={<ProtectedRoute><ShopCategory banner={banner_women} category='women' /></ProtectedRoute>} />
      <Route path="/kids" element={<ProtectedRoute><ShopCategory banner={banner_kids} category='kid' /></ProtectedRoute>} />
      
      {/* Protected Route for Product */}
      <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} >
        <Route path=":productId" element={<ProtectedRoute><Product /></ProtectedRoute>} />
      </Route>
      
      {/* Protected Route for Cart */}
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
};

export default AppRoutes;
