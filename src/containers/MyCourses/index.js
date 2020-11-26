import React from 'react'
import './styles.css'
import Activities2 from'../../components/Activities2'
import Sidebar from '../../components/Sidebar'

function index(){
    return(
        <div className="my-courses">
        
            <div>
                <Sidebar name="Fausto Silva" course="Engenharia de Computação"></Sidebar>
            </div>
            <div>
                <Activities2 title="Meus cursos"/>
            </div>
        </div>

    )
}
export default index


