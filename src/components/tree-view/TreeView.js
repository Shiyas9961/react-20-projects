import React from 'react'
import MenuList from './MenuList'
import './style.css'

const TreeView = ({menus}) => {
  return (
    <div className="main-container">
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView