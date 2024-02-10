import React, { useContext } from "react";
import "./Item.css";
import { Link, useParams } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="w-[250px] item">
      <Link to={`/product/${props.id}`} >
        <img src={props.image} alt="" />
      </Link>
      <p className="mt-2 text-sm">{props.name}</p>
      <div className="flex gap-4">
        <div className="text-[#374151] font-bold text-lg">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] font-semibold line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
