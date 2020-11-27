import React from 'react'
import './styles.css'
import Resume from '../../components/Resume'
import Activities from '../../components/Activities'

function index (){
    return(
        <div className="dashboard1">   
            <Resume/>
            <Activities/>
        </div>
        
    )
}
export default index

