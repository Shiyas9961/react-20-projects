import React, { useContext } from 'react'
import { FeatureContext } from './context/feauterContext'
import ThemeChange from '../light-dark/ThemeChange'
import TabList from '../click-tabs/TabList'
import Accordian from '../accordian/Accordian'
import RandomColor from '../randomColor/RandomColor'
import TicToc from '../tic-toc-game/TicToc'

const FeatureFlag = () => {
    const { compObj, loading } = useContext(FeatureContext)

    //console.log(compObj, loading)

    const obj = [
        {
            enable : 'showLightAndDark',
            component : <ThemeChange key={1}/>
        },
        {
            enable : 'showClickTabs',
            component : <TabList key={0}/>
        },
        {
            enable : 'showAccordian',
            component : <Accordian key={2}/>
        },
        {
            enable : 'showRandomColor',
            component : <RandomColor key={3}/>
        },
        {
            enable : 'sowTicTocGame',
            component : <TicToc key={6}/>
        }
        
    ]

    const checkComp = (getCurrEnable) => {
        return compObj[getCurrEnable]
    }

    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1 style={{textAlign : 'center'}}>Features</h1>
        {
            obj.map(item => (
                 checkComp(item.enable) ? item.component : null
            ))
        }
    </div>
  )
}

export default FeatureFlag