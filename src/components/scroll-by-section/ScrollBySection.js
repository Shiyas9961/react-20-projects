import React, { useRef } from 'react'
import './ScrollBySection.css'

const ScrollBySection = () => {

    const sectRef = useRef()

    const comp = [
        {
            title : "First component",
            style : {
                height : '100vh',
                width : '100%',
                backgroundColor : 'red'
            }
        },
        {
            title : "Second component",
            style : {
                height : '100vh',
                width : '100%',
                backgroundColor : 'blue'
            }
        },
        {
            title : "Third component",
            style : {
                height : '100vh',
                width : '100%',
                backgroundColor : 'green'
            }
        },
        {
            title : "Forth component",
            style : {
                height : '100vh',
                width : '100%',
                backgroundColor : 'orange'
            }
        }
    ]

    const handleScroll = () => {
        let pos = sectRef.current.getBoundingClientRect().top

        window.scrollTo({
            top : pos,
            behavior : 'smooth'
        })

    }

  return (
    <div className='container'>
        <h1>Scroll By Section</h1>
        <button onClick={handleScroll}>Click To Scroll</button>
        {
            comp && comp.length ? (
                comp.map((each, index) => {
                    return (
                        <div ref={index === 3 ? sectRef : null} className='inside-comp' key={index} style={each.style}>
                            <h2>{each.title}</h2>
                        </div>
                    )
                })
            ) : null
        }
    </div>
  )
}

export default ScrollBySection