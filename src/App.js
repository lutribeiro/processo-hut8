import React from 'react'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import Activities from './components/Activities'
import './App.css'


function App() {
  return (
    <div className="grid">
      <Sidebar name="Fausto Silva" course= "Engenharia de Computação"/>
      <Resume />
      <Activities/>
    </div>
  )
}

export default App
