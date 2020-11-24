import React from 'react'
import './styles.css'
import Blocks2 from './Blocks2/index'

function index() {
    return (
        <div>
        <div className= "title">
                <h1 className ="resume"> Algoritmos e Programação</h1>
                <h2 className="class"> Turma M52</h2>
        </div>
        

       <div className = "blocks">
            <Blocks2 number = "01" info="Próximas atividades" icon= "fas fa-graduation-cap"/>
            <Blocks2 number = "04" info="Créditos" icon="fas fa-tasks"/>
            <Blocks2 number = "28" info="Alunos matriculados" icon= "fas fa-user-graduate"/>
        </div> 
        </div> 
    )
}   

export default index