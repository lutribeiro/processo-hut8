import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

function Sidebar (props){
    return (
        <div className="Sidebar">
            
            <div>
                <img class = 'avatar-fausto' src ='https://i.imgur.com/aU48TWI.jpg' alt = 'Avatar Fausto Silva'></img>    
                <h1>{props.name}</h1> 
                <h2>{props.course} </h2>
                <div className= "buttons">
                    <NavLink to='/' exact className='button-dashboard' activeClassName = 'active' >Dashboard</NavLink>
                    <NavLink to ='/cursos' exact className= 'button-courses'  activeClassName = 'active' >Meus cursos</NavLink>
                </div>
            </div>
         
        </div>

    )
}
export default Sidebar