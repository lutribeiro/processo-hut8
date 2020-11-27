import React from 'react'
import './styles.css'
// import Sidebar from '../../components/Sidebar'
import Resume from '../../components/Resume'
import Activities from '../../components/Activities'
import {link} from 'react-router-dom'

function index (){
    return(
        <div className="grid"> 
            {/* <div>
                <Sidebar name="Fausto Silva" course= "Engenharia de Computação"/>
            </div> */}
            
            <div>  
                <Resume/>
                <Activities/>
            </div>
        </div>
    )
}
export default index

