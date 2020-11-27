import React from 'react'
import Subject from './containers/Subject'
import MyCourses from './containers/MyCourses'
import './App.css'
import Dashboard from './containers/Dashboard'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
       <div className="grid">
        <Sidebar name="Fausto Silva" course="Engenharia de Computação"></Sidebar>
          <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/cursos' exact component={MyCourses}/>
              <Route path='/curso/1' exact component={Subject}/>  
        
        </Switch> 
      </div>  
    </BrowserRouter> 
  )
}
export default App
