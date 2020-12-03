import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Index (props){
    return (
      
        <div className = "rectangle2">
             <div className = "image">
                <img src ={props.image}/>
            </div>
            <div className = "info-rectangle2">
                <div className="graduate">
                    <h1> {props.graduate}</h1>
                </div>
                <div className="subject">
                    <Link to='/curso/1'>{props.subject}</Link>
                    <Link to='/curso/2'>{props.subject2}</Link>
                </div>
                <div className="class">
                     <h3>{props.class}</h3>
                </div>
            </div>
        </div>
    )
}
export default Index