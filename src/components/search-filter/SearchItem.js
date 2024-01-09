import React, { useEffect, useState } from 'react'
import ShowSearch from './ShowSearch'
import './Search.css'

const SearchItem = () => {
    const [typeText, setTypeText] = useState('')
    const [userData, setUserData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(null)
    const [showSugg, setShowSugg] = useState(false)

    const handleClick = (e) => {
        setTypeText(e.target.innerText)
        setShowSugg(false)
    }

    const getUsers = async () => {
        try{
            setIsLoading(true)
            const response = await fetch('https://dummyjson.com/users')

            const data = await response.json()

            if(data && data.users && data.users.length){
                setUserData(data.users.map(item => item.firstName))
                //setFilteredData(data.users.map(item => item.firstName))
                setIsLoading(false)
            }
        }catch(err){
            setErrMsg(err.message)
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        const text = e.target.value.toLowerCase()

        setTypeText(text)

        if(text.length > 0){
            const filteredItem = userData && userData.length ? userData.filter(item => item.toLowerCase().indexOf(text) > -1) : [] 

            setFilteredData(filteredItem)
            setShowSugg(true)
        }else{
            setShowSugg(false)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    console.log(userData)
    console.log(filteredData)

    if(errMsg !== null){
        return <p>{errMsg}</p>
    }

    if(isLoading){
        return <h3>Loading...</h3>
    }
  return (
    <div className='search-container'>
        <div className="search">
            <input 
                type="text"
                value={typeText}
                placeholder='Search User...' 
                onChange={handleChange}
            />
        </div>
        {
            showSugg ? <ShowSearch handleClick={handleClick}  users={filteredData} /> : null
        }
    </div>
  )
}

export default SearchItem