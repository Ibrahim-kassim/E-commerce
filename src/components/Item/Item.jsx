import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className='w-[250px] item'>
      <img src={props.image} alt="" />
      <p className='mt-2 text-sm'>{props.name}</p>
      <div className='flex gap-4'>
        <div className='text-[#374151] font-bold text-lg'>${props.new_price}</div>
        <div className='text-[#8c8c8c] font-semibold line-through'>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
