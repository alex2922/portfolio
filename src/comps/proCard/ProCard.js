import React from 'react'
import "./ProCard.scss"


function ProCard(props) {
  return (
    <a target='_blank' href={props.link} className='pro-card glass'>

        <div className="imgbox bg-img-cover" style={{ backgroundImage: `url(${props.img})` }}>
        </div>

        <h3>{props.heading}</h3>

        <p>{props.desc}</p>



        
      
    </a>
  )
}

export default ProCard
