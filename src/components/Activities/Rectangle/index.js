import React from 'react'
import './styles.css'

function Index (props){
    return (
      
        <div className = "rectangle">
             <div className = "image">
                <img src ={props.image}/>
            </div>
            <div className = "info-rectangle">
                <div className="subject">
                    <h1>{props.subject}</h1>
                </div>
                <div className="activity">
                    <h2>{props.activity}</h2>
                </div>
                <div className="date">
                     <h3>{props.date}</h3>
                </div>
            </div>
        </div>
    )
}
export default Index