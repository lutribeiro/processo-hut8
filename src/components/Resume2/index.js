import React from 'react'
import './styles.css'
import Blocks2 from './Blocks2/index'

function index() {
    return (
        <div>
        <div className= "title-page3">
                <div className="resume3">
                    <h1> Algoritmos e Programação</h1>
                    <h2>Turma M52</h2>
                </div>
                <div className="teacher">
                    <img class = "teacher-picture" src ="https://i.imgur.com/T2XCCkG.jpg" alt = "Avatar Luciano Hulk"></img>
                    <div className="teacher-info">   
                        <h1 class="teacher-name"> Luciano Hulk </h1>
                         <p> Professor responsável</p>
                    </div>
                </div>
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