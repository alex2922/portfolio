import React from 'react'
import './Home.scss'
import Hero from './hero/Hero'
import AboutSection from './about/AboutSection'

function Home() {
  return (
    <div className='home'>


        <div className="bg dots"></div>

        <Hero />
        <AboutSection/>

        
        
      
    </div>
  )
}

export default Home
