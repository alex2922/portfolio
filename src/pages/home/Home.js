import React from 'react'
import './Home.scss'
import Hero from './hero/Hero'
import AboutSection from './about/AboutSection'
import ExpSection from './exp/ExpSection'

function Home() {




  return (
    <div className='home'>


        <div className="bg dots"></div>

        <Hero />
        <AboutSection/>
        <ExpSection/>

        
        
      
    </div>
  )
}

export default Home
