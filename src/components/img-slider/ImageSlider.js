import React, { useEffect, useState } from 'react'
import './ImageSlide.css'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const ImageSlider = ({ url, page, limit }) => {

    const [currentImg, setCurrentImg] = useState(0)
    const [imgData, setImgData] = useState([])
    const [errMsg, setErrMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchUrl = async (getUrl) => {
        try{
            setIsLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            
            if(data){
                setIsLoading(false)
                setImgData(data)
            }

        }catch(err){
            setErrMsg(err.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {

        if(url !== ""){
            fetchUrl(url)
        }

        // eslint-disable-next-line
    },[url])


    const handleLeftClick = () => {
        currentImg === 0 ? setCurrentImg(imgData.length - 1) : setCurrentImg(prev => prev - 1)
    }
    const handleRightClick = () => {
        currentImg === imgData.length - 1 ? setCurrentImg(0) : setCurrentImg(prev => prev + 1)
    }

    //console.log(imgData)

    if(isLoading){
        return <h2 style={{textAlign : 'center'}}>Loading....</h2>
    }
    if(errMsg !== null){
        return <p>Error occured ! {errMsg}</p>
    }

  return (
    <div className='container'>
        <BsArrowLeftCircle className='left-arrow arrow' onClick={handleLeftClick}/>
        {
            imgData.length > 0 ? (
                imgData.map( (img, index) => {
                    return (
                        <img 
                            key={img.id} 
                            src={img.download_url} 
                            alt={img.author} 
                            className={currentImg === index ? 'currentImg' : 'currentImg hide-img'}
                        />
                    )
                })
            ) : null
        }
        <BsArrowRightCircle className='right-arrow arrow' onClick={handleRightClick}/>
        <span className='imgSelection'>
            {
                imgData.map((img, index) => {
                    return <button key={index} className={currentImg === index ? 'active' : 'inactive'}></button>
                })
            }
        </span>
    </div>
  )
}

export default ImageSlider