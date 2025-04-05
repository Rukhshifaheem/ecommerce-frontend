import React, { useState } from "react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Tabs Section */}
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md shadow-md ${
            activeTab === "description"
              ? "bg-white border border-gray-300 text-black shadow-md"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium rounded-md shadow-md ${
            activeTab === "reviews"
              ? "bg-white border border-gray-300 text-black shadow-md"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 border border-gray-300 rounded-md bg-white shadow-md">
        {activeTab === "description" && (
          <div className="text-gray-700 leading-relaxed">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <br />
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-700">
            <p>No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
