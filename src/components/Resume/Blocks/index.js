import React from 'react'
import './styles.css'

function Index(props) {
    return (
        <div className= "props-blocks">
            <div className= "info-blocks">
                <h1> {props.number} </h1>
                <p> {props.info} </p>
            </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />           
        <div className= "icon">
             <i class= {props.icon}/>   
        </div>
        </div>
    )
}

export default Index
