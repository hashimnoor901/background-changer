import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#fff939")

  return (
    <>
      <div style={{ backgroundColor: color, height: "100vh" }}>
        <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>red</button>
        <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>blue</button>
        <button onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>pink</button>
        <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>purple</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: "green`" }}>green</button>
        <button onClick={() => setColor("white")} style={{ backgroundColor: "white" }}>white</button>
        <button onClick={() => setColor("skyblue")} style={{ backgroundColor: "skyblue" }}>skyblue</button>
      </div>
    </>
  )
}

export default App
