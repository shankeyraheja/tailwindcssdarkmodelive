import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import ToggleDarkMode from './components/toggledarkmode'
function App() {
 
  return (
    <>
     <ToggleDarkMode/>
     <div className='flex flex-wrap justify-center gap-2 mt-3'>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </div>
    </>
  )
}

export default App
