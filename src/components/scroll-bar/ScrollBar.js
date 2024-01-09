import { useEffect, useState } from 'react'
import './ScrollBar.css'

export default function ScrollBar ({ url }) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [scroll, setScroll] = useState(0)


    async function fetData (getUrl) {
        try{
            setIsLoading(true)

            const response = await fetch(getUrl)
            const resData = await response.json()

            if(resData && resData.products && resData.products.length){
                setIsLoading(false)
                setData(resData.products)
            }
        }catch(err){
            setErrMsg(err.message)
            setIsLoading(false)
        }
    }

    const handleScrollPercentage = () => {

        const howMuchScrolled = document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScroll((howMuchScrolled/height)*100)

    }

    useEffect(()=>{

        fetData(url)
    },[url])


    useEffect(() => {
        document.addEventListener('scroll', handleScrollPercentage)

        return () => {
            document.removeEventListener('scroll',()=>{})
        }
    }, [])

    if(errMsg.length){
        return <p style={{color: 'crimson'}}>{errMsg}</p>
    }

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="main-container">
            <div className="scroll-menu">
                <h1>Product Scroll - {Math.floor(scroll)}%</h1>
                <div className="scroll-path">
                    <div className="scroll-item" style={{width : `${scroll}%`}}>
                    </div>
                </div>
            </div>
            <div className="item-container">
                {
                    data && data.length > 0 ? (
                        data.map(prod => {
                            return (
                                <p key={prod.id}>{prod.title}</p>
                            )
                        })
                    ) : null
                }
            </div>
            {
                Math.floor(scroll) === 100 ? <span>Maximum Product reached</span> : null 
            }
        </div>
    )
}