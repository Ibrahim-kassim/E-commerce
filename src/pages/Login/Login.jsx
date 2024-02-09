import React from 'react'
import Footer from '../../components/footer/Footer'
import "./Login.css"
const Login = () => {
  return (
    <div>
      <div className='flex flex-col items-center  justify-center h-screen gradiaant  '>
        <div className='h-[70vh] bg-white box-border shadow-2xl items-start justify-between px-8 py-8 flex flex-col w-[60vh]'>
          <h1 className='text-2xl font-semibold pt-4'>Sign Up</h1>
          <input className='w-full border-2 py-4 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300' type="text" placeholder='Your Name' />
          <input className='w-full border-2 py-4 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300' type="email" name="" id="" placeholder='Email Address' />
          <input className='w-full border-2 py-4 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300' type="password" placeholder='Password' />
          <button className='w-full bg-[#C25A37] py-4 mt-4 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#9c4b2b] animate-pulse '>Continue</button>
          <div>
          <p>Already have an account? <span className='text-[#C25A37] font-bold cursor-pointer hover:text-[#9c4b2b] hover:scale-105 duration-300 ease-in-out transform ' >Login here</span></p>
          <div className='flex items-center gap-2 mt-4'>
            <input type="checkbox" className='cursor-pointer' name="" id="" />
            <p className=''>By continuing , i agree the terms of use & privacy policy.</p>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login