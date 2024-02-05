import React from 'react'
import "./Offers.css"
import exclusive_image from "../../assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers py-12 px-24 w-full h-screen '>
        <div className='px-28 py-16 gradiant flex flex-row  items-center justify-between h-[60vh]'>
        <div className='flex flex-col items-start justify-start'>
            <div className='text-[80px] font-bold'>Exclusive</div>
            <div className='text-4xl font-bold mt-3'>Offers For You</div>
            <p className='text-[22px] font-medium'>Only on best Seller Products</p>
            <button className=' rounded-full w-[256px] h-[70px] cursor-pointer  text-[22px] mt-[30px] bg-[#ff4545] px-6 py-2 flex items-center justify-center text-white font-sans'>Check Now</button>

        </div>
        <div className='flex  items-center justify-center  pt-[50px]'>
            <img src={exclusive_image} className=' h-[400px]' alt="" />
        </div>

        </div>
   
    </div>
  )
}

export default Offers