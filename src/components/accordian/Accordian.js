import data from './data'
import { useState } from 'react'
import './accordian.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [multiSelected, setMultiSelected] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleClick = (id) => {
        if(id === selected){
            setSelected(null)
        }else{
            setSelected(id)
        }
    }

    const handleMultipleClick = (id) => {

        let cpyMultiple = [...multiple]
        const findTheIndexOfCurrentId = cpyMultiple.indexOf(id)

        console.log(findTheIndexOfCurrentId)
        console.log(cpyMultiple)

        if(findTheIndexOfCurrentId === -1){
            cpyMultiple.push(id)
        }else{
            cpyMultiple.splice(findTheIndexOfCurrentId, 1)
        }

        setMultiple(cpyMultiple)
        console.log(selected)
    }

    return (
        <div className="content">
            <button onClick={()=>setMultiSelected(prev => !prev)} className={multiSelected ? 'selected' : null}>Set Multiple</button>
            {
                data.length ? (
                    data.map(item => {
                        return (
                            <div key={item.id} className='display__content'>
                                <div onClick={multiSelected ? () => handleMultipleClick(item.id) : ()=>handleClick(item.id)} className={selected === item.id ?'questin show' : 'questin'}>
                                    <h3>{item.question}</h3>
                                    <span >+</span>
                                </div>
                                {
                                    multiSelected ? multiple.indexOf(item.id) !== -1 && (
                                        <div className='answer'>
                                            <p>{item.answer}</p>
                                        </div>
                                    ) : selected === item.id && (
                                        <div className='answer'>
                                            <p>{item.answer}</p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    )
}

export default Accordian