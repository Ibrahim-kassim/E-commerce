import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";
import { shopContext } from "../../contexts/shopContext";
import { AiFillCloseSquare } from "react-icons/ai";
import CartTotal from "../../components/cartTotal/CartTotal";

const Cart = () => {
  const { all_product, cartItem, removeFromCart, addToCart } =
    useContext(shopContext);

  return (
    <div className="bb py-20 px-4 lg:px-16">
      <div className="overflow-x-auto overflow-y-auto max-h-[60vh] mb-8 lg:mb-24">
        <table className="w-full table-fixed bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-4 py-2 lg:w-1/6">Products</th>
              <th className="px-4 py-2 lg:w-1/6">Title</th>
              <th className="px-4 py-2 lg:w-1/6">Prices</th>
              <th className="px-4 py-2 lg:w-1/6">Quantity</th>
              <th className="px-4 py-2 lg:w-1/6">Total</th>
              <th className="px-4 py-2 lg:w-1/6">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_product.map((e) => {
              if (cartItem[e.id] > 0) {
                return (
                  <tr key={e.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-6 text-center ">
                      <img src={e.image} alt="" className="w-12 h-12 object-cover rounded mx-auto " />
                    </td>
                    <td className="px-4 py-2 text-center ">{e.name}</td>
                    <td className="px-4 py-2 text-center ">${e.new_price}</td>
                    <td className="px-4 py-2 text-center ">{cartItem[e.id]}</td>
                    <td className="px-4 py-2 text-center ">${cartItem[e.id] * e.new_price}</td>
                    <td className="px-4 py-2 text-center ">
                      <AiFillCloseSquare
                        size={30}
                        onClick={() => removeFromCart(e.id)}
                        className="cursor-pointer text-red-600 hover:text-red-800 mx-auto "
                      />
                    </td>
                  </tr>
                );
              }
              return null; // Return null if the condition is not met
            })}
          </tbody>
        </table>
      </div>
      <CartTotal/>
      <Footer />
    </div>
  );
};

export default Cart;
