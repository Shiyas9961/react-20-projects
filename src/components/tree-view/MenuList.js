import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list}) => {
  return (
    <ul>
        {
            list.map(item => {
                return <MenuItem key={item.label} item={item}/>
            })
        }
    </ul>
  )
}

export default MenuList