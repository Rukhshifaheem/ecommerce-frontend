import React from 'react';
import exclusiveImage from "../../assets/Frontend_Assets/exclusive_image.png";

const Offers = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-b from-pink-100 to-gray-100 mt-6 md:mt-10 lg:mt-16 xl:mt-20">

            {/* Left Section */}
            <div className="text-center md:text-left max-w-lg">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Exclusive
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                    Offers For You
                </h1>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    ONLY ON BEST SELLERS PRODUCTS
                </p>

                {/* Button */}
                <div className="mt-6">
                    <button className="bg-red-500 text-white text-lg px-6 py-3 rounded-full hover:bg-red-600 transition">
                        Check Now
                    </button>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="mt-10 md:mt-0">
                <img
                    src={exclusiveImage}
                    alt="Exclusive Offer"
                    className="w-48 sm:w-64 md:w-72 lg:w-60 xl:w-56 drop-shadow-lg"
                />

            </div>

        </div>
    );
};

export default Offers;
