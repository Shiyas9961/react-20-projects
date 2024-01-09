import { createContext, useEffect, useState } from "react";
import fetchEnableComponent from "../data";

export const FeatureContext = createContext()

export default function FeatureGlobalAccess ({ children }) {

    const [compObj, setCompObj] = useState({})
    const [loading, setLoading] = useState(false)


    const fetchCompObj = async () => {
        try{
            setLoading(true)

            const response = await fetchEnableComponent()

            //console.log(response)
            setCompObj(response)
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }


    useEffect(() => {
        fetchCompObj()
    },[])

    //console.log(compObj)

    return(
        <FeatureContext.Provider value={{compObj, loading}}>
            {children}
        </FeatureContext.Provider>
    ) 
}