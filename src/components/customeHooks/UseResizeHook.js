import React from 'react'
import { useResize } from './useResize'

const UseResizeHook = () => {
    const size = useResize()

    const { height, width } = size
  return (
    <div>
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
  )
}

export default UseResizeHook