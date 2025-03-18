import React from 'react'
import welcomeImg from '../../assets/homeimages/coverimg.jpg'
import { Link } from "react-router-dom";

const Hero : React.FC = () => {
  return (
    <div className='mt-12 flex flex-col sm:flex-row border border-gray-400'>

        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Check Out Our Latest Arrivals</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>New Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>Explore</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
                <div className='mt-4'>
                    <br/>
                    <Link to="/products">
                    <button className='px-4 py-2 border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors'>
                        Shop Now
                    </button>
                    </Link>
                </div>
            </div>
        </div>

        {/* Hero Right Side*/}
        <img src={welcomeImg} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero