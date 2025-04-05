import React from 'react';

const NewsLetter = () => {
  return (
    <div className=" max-w-[1200px] mx-auto bg-gradient-to-b from-pink-100 to-gray-100 py-20 px-4">
      {/* Heading Section */}
      <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Get Exclusive Offers On Your Email</h1>
        <p className="text-gray-600 mt-4">Subscribe to our newsletter and stay updated</p>
      </div>

      {/* Subscription Form */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
        <input 
          type="email" 
          placeholder="Your Email Id" 
          className="w-full max-w-md sm:w-[400px] px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;

