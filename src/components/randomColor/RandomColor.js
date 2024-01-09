import React, { useState } from 'react'
import './randomColor.css'

const RandomColor = () => {
    const [color, setColor] = useState('#000000')
    const [typeOfColor, setTypeOfColor] = useState('hex')

    const generateRandomValue = (length) => {
        return Math.floor(Math.random()*length)
    }

    const generateHexColor = () => {
        const hexArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
        let hexVal = '#'

        for(let i=0; i<6; i++){
            hexVal += hexArr[generateRandomValue(hexArr.length)]
        }
        setColor(hexVal)
    }

    const generateRgbColor = () => {
        const r = generateRandomValue(256)
        const g = generateRandomValue(256)
        const b = generateRandomValue(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

  return (
    <div className='content' style={{backgroundColor : color}}>
        <div className="btns">
            <button style={{backgroundColor : typeOfColor === 'hex' ? 'crimson' : 'cornflowerblue'}} onClick={() => setTypeOfColor('hex')}>HEX Colour</button>

            <button style={{ backgroundColor : typeOfColor === 'rgb' ? 'crimson' :  'cornflowerblue'}} onClick={() => setTypeOfColor('rgb')}>RGB Colour</button>
            
            <button onClick={typeOfColor === 'hex' ? generateHexColor : generateRgbColor}>Generate Random Colour</button>
        </div>
        <div className="display">
            <h3>{color}</h3>
            <h4>Color type {typeOfColor}</h4>
        </div>
    </div>
  )
}

export default RandomColor