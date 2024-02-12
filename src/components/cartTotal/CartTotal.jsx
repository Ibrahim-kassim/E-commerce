import React, { useContext } from "react";
import { shopContext } from "../../contexts/shopContext";

const CartTotal = () => {
    const {getTotalCartAmount} =useContext(shopContext)
  return (
    <div className=" py-24 flex items-center justify-between h-[60vh] gap-6 m-auto ">
      <div className=" w-full h-full flex flex-col border-r-2 border-gray-200  px-4 gap-4">
        <h1 className="text-2xl font-bold py-4 pb-8"> cart Total</h1>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-2">
          <div>SubTotal</div>
          <div>${getTotalCartAmount()}</div>
        </div>
        <div className="flex items-center justify-between border-b-2 border-gray-400  py-2">
          <div>shipping</div>
          <div>Free</div>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-xl">Total</h1>
          <div className="font-extrabold text-xl">${getTotalCartAmount()}</div>
        </div>
      </div>
      <div className="flex flex-col items-center h-full w-full justify-center lg:justify-start md:justify-start ">
        <p className="font-medium text-sm sm:text-xl mb-4 ">
          if you have a promo code Enter it here
        </p>
        <div className="flex items-center border border-gray-300  ">
          <input
            type="text"
            placeholder="promocode"
            className="flex-1 border border-none outline-none focus:outline-8 border-gray-300 rounded px-2 py-1"
          />
          <button className="bg-black/90 text-white px-4 py-1 rounded">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
