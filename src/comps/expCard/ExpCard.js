import React from 'react'
import './ExpCard.scss'

function ExpCard(props) {
    return (
        <div className='expcard'>


            <div className="top">
                <div className="left">
                    <h4>{props.company}</h4>/
                    <p>{props.role}</p>
                </div>
                <div className="right">
                    <p>{props.from} - {props.to}</p>
                </div>
            </div>
                    <p>{props.desc}</p>
            <div className="tags">
                {props.tags && props.tags.map((tag) => {
                    return <p className='tag'> {tag}</p>;
                })}
            </div>





        </div>
    )
}

export default ExpCard
