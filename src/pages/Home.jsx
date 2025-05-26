import React from 'react'
import '../index.css'
import LandingPage from './../components/LandingPage';
import HomePageDesc from './../components/HomePageDesc';

const Home = () => {
  return (
    <div className='HomePageParent'>
      <LandingPage />
      <HomePageDesc />
    </div>
  )
}

export default Home
