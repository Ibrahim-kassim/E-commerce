import React from 'react'
import "./Hero.css"
import bye from "../../assets/bye.jpeg"
import shop3women from "../../assets/shop3women.avif"
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='sm:flex items-center sm:h-[100vh]  h-full justify-center lg:px-12 pt-8 Hero'>
        <div className='h-full w-full flex flex-col sm:items-start items-center flex-1 justify-center pb-40 px-16 leading-10 '>
            <div className='font-bold'>NEW ARRIVAL ONLY</div>
            <div className=' flex items-center justify-center gap-5'>
                <h1 className='font-bold text-5xl'>new</h1>
                <img src={bye} className='bye w-12 h-12' alt="" />
            </div>
            <div className='font-bold text-5xl'>Collection</div> 
            <div className='font-bold text-5xl'>For everyone</div>
            <div className='flex rounded-full gap-4 bg-red-600 mt-12 px-8 py-2 items-center text-white'>
                <h1>Latest Collection</h1>
               < FaLongArrowAltRight size={20}/>
            </div>
        </div>
        <div className='h-full w-full flex flex-1 items-center justify-center '>
            <img src={shop3women} className='h-[80%] w-full' alt="" />

        </div>
    </div>
  )
}

export default Hero