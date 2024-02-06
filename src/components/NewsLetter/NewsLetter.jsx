import React from 'react';
import "./NewsLetter.css"; // You can remove this import since we won't use it anymore

const NewsLetter = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-24 px-4 lg:px-0 graidant  h-[60vh] flex items-center justify-center flex-col"> {/* Added Tailwind classes for responsiveness */}
      <h1 className="text-center text-gray-700 text-3xl lg:text-4xl font-semibold mb-4">Get Exclusive Offers in Your Email</h1>
      <p className="text-center text-gray-600 mb-8 lg:text-lg">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-center bg-white rounded-full border border-gray-300 py-2 lg:w-3/4 lg:mx-auto">
        <input className="w-3/4 lg:w-3/5 pl-4 py-2 border-none outline-none text-gray-700" type="email" placeholder="Enter your email address" />
        <button className="w-1/4 h-full lg:w-1/5 rounded-full bg-black text-white font-semibold text-sm lg:text-base">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
