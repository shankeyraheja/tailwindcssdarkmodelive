import React, { useState } from 'react'
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";



const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)
    
    const handleClick = () => {
        setDarkMode(!darkMode)
        if(!darkMode){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }
  
    return (
    <button 
    className='px-4 py-2 bg-gray-200 text-black'
    
    onClick={handleClick}>
        {darkMode?<CiSun className='text-[30px]'/>:<FaMoon className='text-[30px]'/>}
    </button>
  )
}

export default ToggleDarkMode