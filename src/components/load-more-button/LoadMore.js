import React, { useEffect, useState } from 'react'
import './LoadMore.css'

const LoadMore = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchUrl(){
        try{
            setIsLoading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

            const data = await response.json()

            if(data && data.products && data.products.length){
                setIsLoading(false)
                setProducts(prev => [...prev, ...data.products])
            }

        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUrl()
        // eslint-disable-next-line
    },[count])

    useEffect(() => {
        if(products && products.length === 100){
            setDisableBtn(true)
        }
    },[products])

    if(isLoading){
        return <h3>Loading...</h3>
    }

  return (
    <div className="container">
        <h1>Products</h1>
        <div className="products-container">
            {
                products.map(item => {
                    return (
                        <div key={item.id} className='products'>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="btn">
            <button disabled={disableBtn} onClick={() => setCount(prev => prev + 1)}>{
                disableBtn ? 'Reached max' : 'Loadmore...'
            }</button>
            {
                disableBtn ? (
                <p style={{textAlign: 'center'}}>You have reached 100 products</p>
                ) : null
            }
        </div>
    </div>
  )
}

export default LoadMore