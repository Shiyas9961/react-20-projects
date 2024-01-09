import React, { useState } from 'react'
import './starRating.css'
import { FaStar } from 'react-icons/fa'

const StarRating = ({noOfStars}) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rating)
  }

  return (
    <div className='content'>
      {
        [...Array(noOfStars)].map((_,index) => {
          index += 1
          return (
            <FaStar
            key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'} 
              size={40}
              onClick={()=>handleClick(index)}
              onMouseEnter={()=>handleMouseEnter(index)}
              onMouseLeave={()=>handleMouseLeave(index)}
            />
          )
        })
      }
    </div>
  )
}

export default StarRating