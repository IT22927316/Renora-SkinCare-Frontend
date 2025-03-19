import React, { useRef, useState } from 'react';
import TouchPause from '../animations/TouchPause';
import { motion } from "framer-motion";

const Category :React.FC= () => {
  return (
    <div style={{ textAlign: 'center' }} className='mt-8'>
      <br />
      <h2 className='text-4xl font-bold leading-snug text-cyan-500'>Explore Our Skincare Essentials</h2>
        <br/>
      <p>Nourish your skin with carefully curated products designed for every skin type.
        <br />From hydrating serums to gentle cleansers and glow-boosting treatments, discover skincare that enhances your natural beauty.
      </p>

      <div className='mt-8'>
        <TouchPause />
      </div>

      <div className="social-media-footer">
          <p className='text-xl'>Find your perfect skincare routine today.</p>
          <a href="/products">
              <br/>
              <motion.button
                className="relative overflow-hidden px-5 py-2 font-semibold rounded bg-cyan-500 text-white border-2 border-cyan-500 transition-all duration-300 group mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-white transition-transform transform translate-y-full group-hover:translate-y-0 duration-300"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-500">
                  Browse Collections
                </span>
              </motion.button>
          </a>
      </div>
    </div>
  )
}

export default Category