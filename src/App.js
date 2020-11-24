import React from 'react'
//import Sidebar from './components/Sidebar'
// import Resume from './components/Resume'
// import Activities from './components/Activities'

import MyCourses from './containers/MyCourses'
import './App.css'

function App() {
  return (
      <div className = "grid">
          <MyCourses/>
      </div>
    // <div className="grid">
    //   <Sidebar name="Fausto Silva" course= "Engenharia de Computação"/>
    // <div>  
    //   <Resume />
    //   <Activities/>
    // </div>
    // </div>
  )
}
export default App
