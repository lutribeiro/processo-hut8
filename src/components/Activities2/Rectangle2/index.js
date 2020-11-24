import React from 'react'
import './styles.css'

function index (props){
    return (
      
        <div className = "rectangle2">
             <div className = "image">
                <img src ={props.image}/>
            </div>
            <div className = "info-rectangle2">
                <div className="graduate">
                    <h1>{props.graduate}</h1>
                </div>
                <div className="subject">
                    <h2>{props.subject}</h2>
                </div>
                <div className="class">
                     <h3>{props.class}</h3>
                </div>
            </div>
        </div>
    )
}
export default index