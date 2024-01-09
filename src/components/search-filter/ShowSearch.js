import React from 'react'

const ShowSearch = ({users, handleClick}) => {
  return (
    <ul>
      {
        users.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
      }
    </ul>
  )
}

export default ShowSearch