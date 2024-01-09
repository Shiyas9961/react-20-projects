import React, { useRef, useState } from 'react'
import { useOutside } from './useOutside'

const UseOutsideClick = () => {

    const cRef = useRef()

    useOutside(cRef, () => setShowContent(false))
    const [showContent, setShowContent] = useState(false)

  return (
    <div>
        {
            showContent ? (
                <div ref={cRef} >
                    <h1>This is sample content</h1>
                    <p>If you click out side of this component it will close. But you click inside of it nothing will happen</p>
                </div>
            ) : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
  )
}

export default UseOutsideClick