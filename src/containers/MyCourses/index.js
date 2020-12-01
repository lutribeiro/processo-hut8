import React from 'react'
import './styles.css'
import Activities2 from'../../components/Activities2'
import {Link} from 'react-router-dom'

function Index(){
    return(
        <div className="my-courses">
            <div>
                <Activities2 title="Meus cursos"/>
            </div>
        </div>

    )
}
export default Index


