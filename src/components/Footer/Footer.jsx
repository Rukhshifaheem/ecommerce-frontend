import React from "react";
import instagram_icon from "../../assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../../assets/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../../assets/Frontend_Assets/whatsapp_icon.png";
import logo from "../../assets/Frontend_Assets/logo.png";

const Footer = () => {
  return (
    <div className="py-10 px-6 mt-10 text-center">
      {/* Logo and Name */}
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <p className="text-2xl font-semibold text-gray-900">SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-4 mt-4 text-gray-700 text-sm md:text-base">
        <li className="hover:text-gray-900 cursor-pointer transition">Company</li>
        <li className="hover:text-gray-900 cursor-pointer transition">Products</li>
        <li className="hover:text-gray-900 cursor-pointer transition">Offices</li>
        <li className="hover:text-gray-900 cursor-pointer transition">About</li>
        <li className="hover:text-gray-900 cursor-pointer transition">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        <img src={instagram_icon} alt="Instagram" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
        <img src={pintester_icon} alt="Pinterest" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
        <img src={whatsapp_icon} alt="WhatsApp" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
      </div>

      {/* Divider and Copyright */}
      <div className="mt-6 border-t-2 border-gray-400 max-w-6xl w-full mx-auto pt-4 text-gray-600 text-sm">
        <p>© 2025 Shopper. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
