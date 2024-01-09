import React, { useState } from 'react'
import './Model.css'
import Model from './Model'

const ModelTest = () => {
    
    const [showPopup, setShowPopup] = useState(false)

    const handleShowPopUp = () => {
        setShowPopup(prev => !prev)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

  return (
    <div className='container'>
        <button onClick={handleShowPopUp}>Show Model Pop up</button>
        {
            showPopup ? <Model 
                onClose={handleClosePopup}
            /> : null
        }
    </div>
  )
}

export default ModelTest