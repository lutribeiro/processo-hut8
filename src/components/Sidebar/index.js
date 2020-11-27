import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

function Sidebar (props){
    return (
        <div className="Sidebar">
            <section class="grid center"> 
            <div>
                <img class = "avatar-fausto" src ="https://i.imgur.com/aU48TWI.jpg" alt = "Avatar Fausto Silva"></img>    
                <h1>{props.name}</h1> 
                <h2>{props.course} </h2>
                <Link to='/' class="button-dashboard">Dashboard</Link>
                <Link to ='/cursos'class= "button-courses">Meus cursos</Link>
            </div>
            </section>
        </div>
    )
}
export default Sidebar