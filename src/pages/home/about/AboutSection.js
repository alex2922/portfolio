import React from 'react'
import './AboutSection.scss'
import { Link } from 'react-router-dom'




var h2classes = "motion-translate-x-in-[200%] motion-translate-y-in-[38%] motion-rotate-in-[100deg]"






function AboutSection() {
  return (
    <div className='about-section parent'>

      <div className="container about-section-container">


        <p className='style'>Know Me</p>
      
          <h2 className={h2classes}>About Me</h2>


        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt amet eius, quas voluptate delectus similique veniam reprehenderit possimus magnam maiores optio velit beatae minus quos tenetur accusamus rem itaque voluptatibus ratione omnis consectetur nulla quis! Consectetur inventore incidunt tenetur repellat.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt amet eius, quas voluptate delectus similique veniam reprehenderit possimus magnam maiores optio velit beatae minus quos tenetur accusamus rem itaque voluptatibus ratione omnis consectetur nulla quis! Consectetur inventore incidunt tenetur repellat.
        </p>

        <Link className='btn' to="/#contact">Contact Me</Link>

      </div>

    </div>
  )
}

export default AboutSection
