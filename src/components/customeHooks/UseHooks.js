import React from 'react'
import { useFetch } from './useFetch'
import './UseHooks.css'

const UseHooks = () => {

    const { data, pending, errMsg } = useFetch('https://dummyjson.com/products', {})


  return (
    <div className='container'>
        <h1>Use Fetch Hook</h1>
        <div className="products" >
        {
            pending ? <h2>Loading...</h2> : null
        }
        {
            errMsg !== null ? <p>{errMsg}</p> : null
        }
        {
            data && data.products && data.products.length ? (
                data.products.map(item => {
                    return <p key={item.id}>{item.title}</p>
                })
            ) : null
        }
        </div>
    </div>
  )
}

export default UseHooks