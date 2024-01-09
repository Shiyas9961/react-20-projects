import React from 'react'
import useLoclaStorage from './useLocalStorage'
import './Theme.css'

const ThemeChange = () => {

    const [theme, setTheme] = useLoclaStorage("theme", "dark")

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme)

  return (
    <div className='main-container' data-theme={theme}>
        <div className="container">
            <p>Hello world !</p>
            <button onClick={handleClick}>Change</button>
        </div>
    </div>
  )
}

export default ThemeChange