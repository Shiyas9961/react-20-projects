import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import './Github.css'

const GitHubProfile = () => {
    const [name, setName] = useState('Shiyas9961')
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')


    const getUser = async () => {
        try{
            setIsLoading(true)
            const response = await fetch(`https://api.github.com/users/${name}`)
            const data = await response.json()

            if(data){
                setUserData(data)
                setIsLoading(false)
                setName('')
            }
        }catch(err){
            setIsLoading(false)
            setErrMsg(err.message)
        }
    }

    useEffect(() => {
        getUser()

     // eslint-disable-next-line
    },[])

    const handleSearch = () => {
        getUser()
    }

    if(errMsg && errMsg.length){
        return <p>{errMsg}</p>
    }

    if(isLoading){
        return <h4>Loading...</h4>
    }

  return (
    <div className='main-container'>
        <div className="header">
            <div className="search-bar">
                <label htmlFor="name">GitHub Name : </label>
                <input 
                    type="text"
                    value={name}
                    id='name'
                    name='name'
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
        {
            !userData.message && userData !== null ? <ProfileCard user={userData}/> : (
                <h3 style={{textAlign : 'center', color: 'crimson'}}>No User found !</h3>
            )
        }
    </div>
  )
}

export default GitHubProfile