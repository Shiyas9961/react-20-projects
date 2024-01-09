import React, { useRef } from 'react'
import './ScrollTopAndBottom.css'
import { useFetch } from '../customeHooks/useFetch'

const ScrollTopAndBottom = () => {

    const bottomRef = useRef() 
    const { data, pending, errMsg } = useFetch('https://dummyjson.com/products?limit=100', {})

    const handleBottomClick = () => {
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    }

    const handleTopClick = () => {
        bottomRef.current.scrollIntoView({
            behavior : 'smooth'
        })
    }

    if(errMsg){
        return <p>{errMsg}</p>
    }

    if(pending){
        return <h2>Loading...</h2>
    }

  return (
    <div className='container'>
        <h1>This is Top of the Page</h1>
        <button onClick={handleTopClick}>Scroll bottom</button>
        <ul>
            {
                data && data.products && data.products.length ? (
                    data.products.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })
                ) : null
            }
        </ul>
        <button onClick={handleBottomClick}>Scroll top</button>
        <h1 ref={bottomRef}>This is Bottom of the Page</h1>
    </div>
  )
}

export default ScrollTopAndBottom