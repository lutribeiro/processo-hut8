import React from 'react'
import './styles.css'

function index (props){
    return (
      
        <div className = "rectangle">
            <div className = "image">
                <img>{props.image}</img>
            </div>
            <div className = "info-rectangle">
                <h1>{props.subject}</h1>
                <h2>{props.activity}</h2>
                <h3>{props.date}</h3>
            </div>
        </div>
    )
}
export default index