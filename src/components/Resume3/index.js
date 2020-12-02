import React, {useEffect, useState}  from 'react'
import {getInfo} from '../../services/requests'
import './styles.css'
import Blocks2 from '.././Resume2/Blocks2/index'

function Index() {
    const [course2Data, setcourse2Data] = useState(null)
  
    useEffect(() =>{
      getInfo().then((res) => {
        setcourse2Data(res.data[0].courses)
      })
    }, [])
    return (
        <div>
        { course2Data ? (
        <>
            <div className= "title-page4">
                    <div className="resume4">
                        <h1> {course2Data[1].course}</h1>
                        <h2>{course2Data[1].class}</h2>
                    </div>
                    <div className="teacher2">
                        <img class = "teacher-picture2" src ={course2Data[1].teacher.avatar}  alt = "Avatar Luciano Hulk"></img>
                        <div className="teacher-info2">   
                            <h1 class="teacher-name2"> {course2Data[1].teacher.name} </h1>
                            <p> Professor responsável</p>
                        </div>
                    </div>
            </div>
            

                <div className = "blocks">
                    <Blocks2 number = {course2Data[1].overview.nextActivities} info="Próximas atividades" icon= "fas fa-graduation-cap"/>
                    <Blocks2 number = {course2Data[1].overview.credits} info="Créditos" icon="fas fa-tasks"/>
                    <Blocks2 number = {course2Data[1].overview.enrolledStudents} info="Alunos matriculados" icon= "fas fa-user-graduate"/>
                </div> 
        </>
        ) : (<p>Carregando...</p>)
    }
        </div> 
     )
}   

export default Index