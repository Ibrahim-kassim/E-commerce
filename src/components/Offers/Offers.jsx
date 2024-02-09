import React from 'react';
import exclusive_image from "../../assets/exclusive_image.png";
import "./Offers.css"

const Offers = () => {
  return (
    <div className="offers pt-12 px-4 lg:px-24 w-full   ">
      <div className="px-4 lg:px-28 py-16 gradiant flex flex-col lg:flex-row items-center justify-between h-[60vh]">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left">
          <div className="text-4xl lg:text-[80px] font-bold">Exclusive</div>
          <div className="text-2xl lg:text-4xl font-bold mt-3">Offers For You</div>
          <p className="text-lg lg:text-[22px] font-medium mt-3 lg:mt-5">Only on bestseller products</p>
          <button className="rounded-full lg:rounded-lg w-full lg:w-[256px] h-[50px] lg:h-[70px] cursor-pointer text-lg lg:text-[22px] mt-3 lg:mt-5 bg-[#ff4545] px-6 py-2 flex items-center justify-center text-white font-sans">Check Now</button>
        </div>
        <div className="flex items-center justify-center pt-8 lg:pt-0">
          <img src={exclusive_image} className="h-[300px] lg:h-[400px]" alt="Exclusive Offers" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
