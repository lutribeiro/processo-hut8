import React from 'react'
import './styles.css'
import Sidebar from '../../components/Sidebar'
import Resume2 from '../../components/Resume2'


function index(){
    return(
        <div className="dashboard3">
            <div>
                <Sidebar name="Fausto Silva" course="Engenharia de Computação"></Sidebar>
            </div>
            <Resume2/>
                
            <div className="teacher">
                <img class = "teacher-picture" src ="https://i.imgur.com/T2XCCkG.jpg" alt = "Avatar Luciano Hulk"></img>
            <div className="teacher-info">   
                <h1 class="teacher-name"> Luciano Hulk </h1>
                <p> Professor responsável</p>
            </div> 
            </div> 
            
        </div>

    )
}
export default index
