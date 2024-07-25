import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Card from './components/cards/card'
import Collect from './components/cards/collection'
import Form from './components/Create/create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
      
    </>
  )
}

export default App
