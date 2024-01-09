import React, { useState } from 'react'
import QrCode from 'react-qr-code'
import './QrCodeGenerator.css'

const QrCodeGenerator = () => {
    const [text, setText] = useState('')
    const [code, setCode] = useState('')

    const handleClick = () => {
        setCode(text)
        setText('')
    }

  return (
    <div className='qr-code-container'>
        <h1>QR Code Generator</h1>
        <div className="input-val">
            <label htmlFor="text">Type here : </label>
            <input 
                type="text" 
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
        </div>
        <QrCode 
            value={code}
            id='qr-code-value'
            size={300}
            bgColor='#fff'
        />
        <button 
            onClick={handleClick}
            disabled={text && text.trim() !== '' ? false : true}
        >
                Generate
        </button>
    </div>
  )
}

export default QrCodeGenerator
