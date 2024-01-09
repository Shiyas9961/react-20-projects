import React, { useEffect, useState } from 'react'
import './TicToc.css'

/*  0, 1, 2,
    3, 4, 5,
    6, 7, 8,
*/

const Square = ({ value, squareClick }) => {

    return <button onClick={squareClick} className='squares'>{value}</button>

}

const TicToc = () => {
    const [square, setSquare] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')
    const [curSts, setCurSts] = useState('')

    const handleRestart = () => {
        setSquare(Array(9).fill(''))
    }

    const getWinners = (currentSquare) => {
        const winSeq = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for(let i=0; i<winSeq.length; i++){
            const [x, y, z] = winSeq[i]

            if(currentSquare[x] && currentSquare[x] === currentSquare[y] && currentSquare[x] === currentSquare[z]){
                return currentSquare[x]
            }
        }
        return null
    }

    const handleClick = (getCurrentPos) => {
        let copySquare = [...square]

        if( getWinners(square) || copySquare[getCurrentPos]) return

        copySquare[getCurrentPos] = isXTurn ? 'X' : 'O'
        setSquare(copySquare)
        setIsXTurn(prev => !prev)
    }

    useEffect(() => {

        if(getWinners(square)){
            setStatus(`Winner is "${getWinners(square)}" Restart the game`)
            setCurSts('win')
        }else if(!getWinners(square) && square.every(item => item !== '')){
            setStatus(`Draw Restart the game`)
            setCurSts('draw')
        }else{
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`)
        }

    },[square, isXTurn])

  return (
    <div className='container'>
        <div className="row">
            <Square value={square[0]} squareClick={()=>handleClick(0)}/>
            <Square value={square[1]} squareClick={()=>handleClick(1)}/>
            <Square value={square[2]} squareClick={()=>handleClick(2)}/>
        </div>
        <div className="row">
            <Square value={square[3]} squareClick={()=>handleClick(3)}/>
            <Square value={square[4]} squareClick={()=>handleClick(4)}/>
            <Square value={square[5]} squareClick={()=>handleClick(5)}/>
        </div>
        <div className="row">
            <Square value={square[6]} squareClick={()=>handleClick(6)}/>
            <Square value={square[7]} squareClick={()=>handleClick(7)}/>
            <Square value={square[8]} squareClick={()=>handleClick(8)}/>
        </div>
        <h2 className={curSts === 'win' ? 'win-sts' : curSts === 'draw' ? 'draw-sts' : null}>{status}</h2>
        <button className='restart' onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default TicToc