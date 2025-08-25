import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './ui/Menu'

function App() {
  const [count, setCount] = useState(0)
const [nombre, setNombre] = useState("Ninguno")
const [variable, setVariable] = useState ("Abel")
useEffect (()=>{
  if ( count == 5 ) {
    setVariable("Abel Alvarado")
    setNombre("kevin")
  }
}, [count])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {variable}
        </p>
      </div>
      <p className="read-the-docs">
        {nombre}
      </p>
      <Menu nombre={nombre} color = "rojo"/>
      <Menu nombre={variable} color ="verde"/>
      
        

    </>
  )
}

export default App
