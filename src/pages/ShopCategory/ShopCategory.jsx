import React, { useContext, useState } from "react";
import { shopContext } from "../../contexts/shopContext";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Item from "../../components/Item/Item";
import Footer from "../../components/footer/Footer";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );

  const itemCount = filteredProducts.length;

  const startItemIndex = 1;
  const endItemIndex = Math.min(startItemIndex + 11, itemCount);
  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...filteredProducts];
  if (sortBy === "priceLowToHigh") {
    sortedProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sortBy === "priceHighToLow") {
    sortedProducts.sort((a, b) => b.new_price - a.new_price);
  }

  return (
    <div className="bb" >
      <div className="shop px-4 sm:px-8 md:px-16 lg:px-24 py-4 gap-4 flex flex-col justify-center items-center">
        <img
        
         src={props.banner} alt="Banner" />
        <div className="flex items-center justify-between px-2 py-4 w-full">
          <p className="flex items-center justify-center gap-2">
            <span className="font-bold md:text-2xl">
              Showing {startItemIndex}-{endItemIndex}
            </span>{" "}
            <p className="md:text-xl">out of {itemCount} products</p>
          </p>
          <div className="flex items-center gap-2 border-2 sm:px-4 sm:py-2 rounded-full bg-slate-200">
            <p className="font-semibold text-md">Sort by:</p>
            <select
              className="outline-none border-none bg-transparent"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div
        
        
         className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center p-4">
          {sortedProducts
            .slice(startItemIndex - 1, endItemIndex)
            .map((item) => (
              <div className="items-center flex justify-center" key={item.id}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ShopCategory;
