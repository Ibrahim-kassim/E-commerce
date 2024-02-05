import React from 'react'
import "./Item.css"
const Item = (props) => {
  return (
    <div className='w-[350px] item'>
        <img src={props.image} alt="" />
        <p className='mt-[px]'>{props.name}</p>
        <div className='flex gap-20'>
            <div className='text-[#374151] font-extrabold text-2xl'>${props.new_price}</div>
            <div className='text-[#8c8c8c] font-bold line-through'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item