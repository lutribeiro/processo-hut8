import React from 'react'
import './styles.css'
import Blocks from './Blocks/index'

function index() {
    return (
        <div> 
            <h1 className ="resume">Resumo</h1>
        <div className = "box">
            <Blocks number = "02" info="Cursos Matriculados" icon= "far fa-graduation-cap"/>
            <Blocks number = "02" info="Atividades próximas" icon= "far fa-tasks"/>
            <Blocks number = "785" info="Alunos online" icon= "fas fa-user-graduate"/>
        </div>
        </div>
    )
}   

export default index
