import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../../contexts/shopContext";
import arrow_icon from "../../assets/breadcrum_arrow.png";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import Footer from "../../components/footer/Footer"
import "./Product.css";
import DiscriptionProduct from "../../components/DescriptionProduct/DiscriptionProduct";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(shopContext);
  const { productId } = useParams();


  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product px-4 sm:px-16 py-12 h-screen ">
      <div className="main flex flex-col items-start justify-between">
        <div className="breadCrum flex items-center justify-start flex-wrap">
          <span>Home</span>
          <img src={arrow_icon} alt="" />
          <span>Shop</span>
          <img src={arrow_icon} alt="" />
          <span>{product.category}</span>
          <img src={arrow_icon} alt="" />
          <span>{product.name}</span>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-10 border-2 bg-white h-auto lg:h-[80vh]">
          <div className="md:flex items-center justify-center lg:flex-1 h-full">
            <div className="flex items-start justify-start lg:w-[40%] h-full max-h-full overflow-hidden">
              <div className="hidden lg:flex flex-col items-center gap-2">
                <img
                  src={product.image}
                  className="w-full h-auto max-h-[25%] object-cover"
                  alt=""
                />
                <img
                  src={product.image}
                  className="w-full h-auto max-h-[25%] object-cover"
                  alt=""
                />
                <img
                  src={product.image}
                  className="w-full h-auto max-h-[5%] object-cover"
                  alt=""
                />
                <img
                  src={product.image}
                  className="w-full h-auto max-h-[25%] object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-start justify-start h-full lg:w-[60%]">
              <div className="h-full w-full px-4 py-4">
                <img
                  src={product.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 h-full">
            <div className="w-full h-full px-10 py-8 flex flex-col">
              <p>{product.name}</p>
              <div className="flex items-center py-4 gap-2">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
              </div>
              <div className="flex items-center text-gray-400 font-bold text-lg gap-4">
                <div>${product.old_price}</div>
                <div className="line-through">${product.new_price}</div>
              </div>
              <div className="py-4">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat sapiente ea, vel impedit, incidunt dolorem nemo
                  laboriosam quibusdam cum natus numquam qui odio deleniti animi
                  quo ipsum? Quaerat veniam explicabo sit perspiciatis. Alias,
                  magnam totam iure mollitia adipisci vel eius ratione debitis
                  iusto officiis, repellendus praesentium sequi vero dolores
                  earum!
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-400">
                  Select Size
                </h1>
                <div className="flex items-center gap-4 py-4">
                  <div className="px-2 py-2 border-2 w-[4rem] flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all duration-300 rounded-2xl">
                    S
                  </div>
                  <div className="px-2 py-2 border-2 w-[4rem] flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all duration-300 rounded-2xl">
                    M
                  </div>
                  <div className="px-2 py-2 border-2 w-[4rem] flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all duration-300 rounded-2xl">
                    L
                  </div>
                  <div className="px-2 py-2 border-2 w-[4rem] flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all duration-300 rounded-2xl">
                    Xl
                  </div>
                  <div className="px-2 py-2 border-2 w-[4rem] flex items-center justify-center cursor-pointer hover:bg-slate-300 transition-all duration-300 rounded-2xl">
                    XXl
                  </div>
                </div>

                <div className=" btn w-[250px] flex items-center justify-center">
                  Add To Cart
                </div>
                <p className="py-6">
                  <span className="font-bold text-lg mr-2">Category :</span>
                  Women, T-shirt ,Crop Top
                </p>
                <p>
                  <span className="font-bold text-lg mr-2">Tags :</span>
                  Modern, Latest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DiscriptionProduct/>
      </div>
      <div>
        <RelatedProducts/>
      </div>
      <div className="pt-20">
      <Footer/>

      </div>
     
    </div>
  );
};

export default Product;
