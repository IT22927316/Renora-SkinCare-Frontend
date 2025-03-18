import React from 'react'
import BannerCard from './BannerCard'
import Title from '../../../components/titles/Title'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Reviews :React.FC= () => {
  return (
    <div>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 '>

            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full py-40'>
                
                <h2 className='text-4xl font-bold leading-snug text-black'>What Our Customers Said About Us!</h2>
                <Title text1={'CUSTOMER'} text2={' REVIEWS'}/>
                <p className='md:w-23/24'>At Renora, we believe our customers’ voices matter. Our Customer Reviews section is a
                 space where real people share their honest experiences, insights, and feedback on our products. Whether you’re looking 
                 for quality, effectiveness, or the perfect fit, hear directly from those who have tried and loved them. We value authenticity 
                 and transparency, so you get real opinions to help you make confident choices. Discover what others are saying—and don’t forget 
                 to share your own experience!</p>
                <div>

                    
                    <Link to="/reviews" className='mt-5 block'>
                        <motion.button
                            className="relative overflow-hidden px-5 py-2 font-semibold rounded bg-pink-600 text-white border-2 border-pink-600 transition-all duration-300 group mb-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 bg-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-300"></span>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-pink-600">
                            Browse Reviews
                            </span>
                        </motion.button>
                    </Link>
                    
                    
                </div>
            </div>

            {/* Right Side */}
            <div>
                <BannerCard></BannerCard>
            </div>

        </div>
    </div>
  )
}

export default Reviews