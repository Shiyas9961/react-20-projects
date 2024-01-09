import React, { useState } from 'react'

const Tab = ({ tabContent, onChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleclick = (getCurrentIndex) => {
        setCurrentIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

  return (
    <div className='container'>
        <div className="tab-container">
            {
                tabContent.map((tab, index) => {
                    return (
                        <div key={index} onClick={()=>handleclick(index)} className={currentIndex === index ? 'tab active' : 'tab'}>
                            <span >{tab.label}</span>
                        </div>
                    )
                })
            }
        </div>
        {
            tabContent[currentIndex] && tabContent[currentIndex].content
        }
    </div>
  )
}

export default Tab