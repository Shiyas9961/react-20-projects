import { useEffect, useState } from "react"


export const useFetch = ( url, options = {} ) => {
    const [data, setData] = useState({})
    const [pending, setPending] = useState(false)
    const [errMsg, setErrMsg] = useState(null)


    const fetchData = async () => {
        setPending(true)

        try{
            const response = await fetch(url, options)

            if(!response.ok){
                console.log("Some issue")
            }

            const result = await response.json()

            setData(result)
            setPending(false)
            setErrMsg(null)
        }catch(err){
            setErrMsg(err.message)
            setPending(false)
        }
    }

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    },[url])

    return { data, pending, errMsg }
}