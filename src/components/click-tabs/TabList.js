import React from 'react'
import './Tab.css'
import Tab from './Tab'

const RandomComponent = () => {
    return <h1 className='comp-item'>This third tab Component</h1>
}

const TabList = () => {

    const tabs = [
        {
            label : "Tab 1",
            content : <div className='item'>This first tab element</div>
        },
        {
            label : "Tab 2",
            content : <div className='item'>This is second tab element</div>
        },
        {
            label : "Tab 3",
            content : <RandomComponent/>
        }
    ]

    const handleChange = (getCurrentId) => {
        console.log(getCurrentId)
    }

  return (
    <Tab tabContent={tabs} onChange={handleChange}/>
  )
}

export default TabList