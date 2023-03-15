import React from 'react'
import "./cardImage.css"

function CardImage({ image }) {
    return (
        <div className='card-image'>
            <img src={image}></img>
        </div>
    )
}

export default CardImage