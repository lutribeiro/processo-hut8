import React from 'react'
import './styles.css'
import Blocks from './Blocks/index'

function Index() {
    return (
        <div className="resume-dashboard"> 
                {/*   <Sidebar name={info[0].name} course={info[0].course}></Sidebar> */}
            <h1 className ="title-resume">Resumo</h1>
            <div className = "blocks">
                <Blocks number = "02"info="Cursos Matriculados" icon= "fas fa-graduation-cap"/>
                <Blocks number = "02" info="Atividades próximas" icon= "fas fa-tasks"/>
                <Blocks number = "785" info="Alunos online" icon= "fas fa-user-graduate"/>
            </div>  
        </div>
    )
}   

export default Index
