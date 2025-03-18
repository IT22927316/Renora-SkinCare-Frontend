import React from 'react'
import Title from '../../components/titles/Title'
import aboutusimg from '../../assets/aboutus.jpg'
import NewsLetter from '../../components/semi/NewsLetter'

const About : React.FC = () => {
  return (
    <div>
      <div className='text-2xl pt-8'>
        <h2 className='text-4xl font-bold'>Welcome to Renora – Where Science Meets Beauty</h2>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-[600px]' src={aboutusimg} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Renora, your destination for premium skincare that blends 
                science, nature, and innovation. We are committed to offering high-quality
                 skincare solutions designed to nourish, protect, and enhance your natural 
                 beauty. Rooted in the heart of Nugegoda, Renora has quickly become a trusted
                  name for those seeking effective, dermatologist-approved products that cater 
                  to every skin type and concern.
              </p>

              <p>At Renora, we believe that skincare is more than just a routine—it’s a 
                commitment to self-care and confidence. Our carefully crafted formulas 
                harness the power of natural extracts, clinically proven ingredients, and 
                cutting-edge skincare technology to deliver visible results. Whether you're 
                looking for deep hydration, anti-aging solutions, or daily protection, our 
                products are designed to bring out the best in your skin.
              </p>

              <b className='text-gray-800'>Our Mission</b>

              <p>At Renora, our mission is to empower individuals through skincare by offering 
                safe, effective, and innovative products that promote radiant and healthy skin. 
                We are dedicated to transparency, sustainability, and customer satisfaction, ensuring 
                that every product we create is backed by science and nature.
              </p>

              <p>Our goal is not just to meet expectations but to exceed them, providing skincare solutions 
                that are dermatologist-tested, cruelty-free, and free from harsh chemicals. Whether you're new 
                to skincare or a beauty enthusiast, Renora is here to help you achieve your glow with confidence.
              </p>
          </div>

          
      </div>

      <div className='text-2xl py-4'>
            <Title text1={'THE'} text2={' RENORA PROMISE '}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>✨ Beyond Beauty ✨</b>
                <p className='text-gray-600'>At Renora, we believe that skincare is more 
                    than just looking good—it’s about feeling confident, empowered, and 
                    radiant in your own skin. Our products are designed to restore, protect, 
                    and enhance your skin’s natural balance, ensuring long-term results, not 
                    just temporary fixes. Whether you're tackling dryness, acne, or signs of 
                    aging, Renora is here to support your skincare journey every step of the 
                    way.
                </p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>🌱 Pure Ingredients 🌱</b>
                <p className='text-gray-600'>We’re committed to clean beauty that delivers. 
                    Every Renora product is formulated using high-performance botanicals, 
                    dermatologist-approved actives, and cutting-edge skincare technology. 
                    Our ingredients are: Sustainably sourced and ethically harvested, Free 
                    from parabens, sulfates, and harsh chemicals, Clinically tested for 
                    safety and effectiveness.
                </p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b className='text-2xl'>🌍 Brand That Puts You First 🌍</b>
                <p className='text-gray-600'>Your skincare should work for you, not against 
                    you. That’s why we provide: Personalized skincare solutions – products 
                    that cater to your unique skin type and concerns, Hassle-free shopping –
                     fast delivery, flexible payments, and easy returns, Expert support – a 
                     team of skincare specialists ready to help you find your perfect match: 
                     At Renora, we don’t just sell skincare—we create a community of care, 
                     where beauty is personal, and everyone is welcome.
                </p>
              </div>
        </div>

      <NewsLetter />
    </div>
  )
}

export default About;