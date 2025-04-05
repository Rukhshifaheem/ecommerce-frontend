import React from "react";
import hand_icon from "../../assets/Frontend_Assets/hand_icon.png";
import heroImage from "../../assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-b from-pink-100 to-gray-100 min-h-screen">
      
      {/* Left Section */}
      <div className="text-center md:text-left max-w-lg">
        <h3 className="text-sm font-semibold tracking-wide text-gray-600">
          NEW ARRIVALS ONLY
        </h3>

        <div className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <p>new</p>
            <img src={hand_icon} alt="hand icon" className="w-8 sm:w-10 h-8 sm:h-10" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-red-500 text-white font-medium text-lg px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-600 transition">
            Latest Collection →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Fashion Model"
          className="w-64 sm:w-80 md:w-[400px] drop-shadow-lg"
        />
      </div>
      
    </div>
  );
};

export default Hero;
