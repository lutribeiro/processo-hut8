import React, { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Subject from './containers/Subject'
import MyCourses from './containers/MyCourses'
import './App.css'
import Dashboard from './containers/Dashboard'
import Sidebar from './components/Sidebar'
import {getInfo} from './services/requests'
import Subject2 from './containers/Subject2'

function App() {
  const [info, setInfo] = useState(null)
  
  useEffect(() =>{
    getInfo().then((res) => {
      setInfo(res.data)
    })
  }, [])

  return (
    <BrowserRouter>
       {info ? (
       <div className="grid">
            <Sidebar name={info[0].name} course={info[0].course}></Sidebar>
            <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/cursos' exact component={MyCourses}/>
              <Route path='/curso/1' exact component={Subject}/>      
              <Route path='/curso/2' exact component={Subject2}/> 
            </Switch> 
        </div>  
      ):(
         <p>Carregando...</p>
       )}     

      </BrowserRouter> 
  )
}        

export default App
