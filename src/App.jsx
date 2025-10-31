import { useState } from 'react'
import Boton from './components/Boton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton text="Hola Mundo" color="blue" />
    </>
  )
}

export default App
