import React from 'react'
import Hero from '../../components/home-comp/Hero'
import Category from '../../components/home-comp/Category'
import AboutSimple from '../../components/home-comp/AboutSimple'
import Reviews from '../../components/home-comp/reviews/Reviews'
import NewsLetter from '../../components/semi/NewsLetter'

const Home : React.FC = () => {
  return (
    <div>
      <Hero />
      <Category/>
      <AboutSimple />
      <Reviews />
      <NewsLetter />
    </div>
  )
}

export default Home