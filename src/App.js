import React from 'react'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import './App.css'

function App() {
  return (
    <div className="grid">
      <Sidebar name="Fausto Silva" course= "Engenharia de Computação"/>
      <Resume />
    </div>
  )
}

export default App
