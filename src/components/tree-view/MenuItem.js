import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaPlus, FaMinus } from 'react-icons/fa'

const MenuItem = ({item}) => {
  const [showChildren, setShowChildren] = useState({})

  const handleChilrenShow = (getCurrentLabel) => {
    setShowChildren(prev => {
      return {
        ...prev,
        [getCurrentLabel] : !prev[getCurrentLabel]
      }
    })
  }

  //console.log(showChildren)


  return (
    <li>
      <div className="parent">
        <p>{item.label}</p>
          {
            item.children && item.children && item.children.length ? <span onClick={()=>handleChilrenShow(item.label)}>
              {
              showChildren[item.label] ? <FaMinus color='#fff' size={20}/> : <FaPlus color='#fff' size={20}/>
              }
              </span> : null
          }
      </div>
        {
            item.children && item.children && item.children.length && showChildren[item.label] ? <MenuList list={item.children}/> : null
        }
    </li>
    
  )
}

export default MenuItem