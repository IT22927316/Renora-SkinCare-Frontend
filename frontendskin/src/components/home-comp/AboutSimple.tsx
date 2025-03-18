import React from 'react'

const AboutSimple :React.FC = () => {
  return (
    <div>
        <div className='text-2xl py-4'>
        <h2 className='text-4xl font-bold leading-snug text-black text-center mb-4'>Why Choose Us ?</h2>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>Premium Quality Skincare:</b>
                <p className='text-gray-600'>At Renora, we believe that your skin deserves the best. That’s why we carefully select high-quality ingredients, 
                    ensuring every product is safe, effective, and dermatologist-approved. Our commitment to quality means you get skincare that’s gentle yet 
                    powerful—because healthy skin starts with the right care.
                </p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>Effortless Shopping Experience:</b>
                <p className='text-gray-600'>We’ve made skincare shopping simple and stress-free! Our easy-to-navigate online store, fast shipping, and secure 
                    payment options ensure a smooth experience from browsing to checkout. Plus, our hassle-free return policy lets you shop with confidence.
                </p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>Skincare Support, Anytime:</b>
                <p className='text-gray-600'>Your skin is unique, and we’re here to help you find the perfect routine. Our dedicated skincare experts are ready 
                    to assist with personalized recommendations and expert advice—because your skin’s glow is our top priority.
                </p>
              </div>
        </div>
    </div>
  )
}

export default AboutSimple