import React from 'react'

const NewsLetter: React.FC = () => {
    {/* 
        -----not to reload the webpage-----

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

        onSubmit={onSubmitHandler}

    */}


  return (
    <div className='mt-4 text-center mb-8'>
        <p className="text-2xl font-medium text-gray-800">
        Stay Updated with Our Latest Arrivals!
        </p>
        <p className="text-gray-400 mt-3">
        Don’t miss out on new trends and exclusive deals! 
        <br />
        Subscribe to our newsletter and be the first to discover our latest collections, special offers, and expert fashion tips.  
        <br />
        Join our style community today and keep your wardrobe ahead of the curve!
        </p>


        <form  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email Here!' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter