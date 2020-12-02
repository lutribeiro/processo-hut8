import React, {useEffect, useState}  from 'react'
import {getInfo} from '../../services/requests'
import './styles.css'
import Blocks2 from './Blocks2/index'

function Index() {
    const [courseData, setcourseData] = useState(null)
  
    useEffect(() =>{
      getInfo().then((res) => {
        setcourseData(res.data[0].courses)
      })
    }, [])
    return (
        <div>
        { courseData ? (
        <>
            <div className= "title-page3">
                    <div className="resume3">
                        <h1> {courseData[0].course}</h1>
                        <h2>{courseData[0].class}</h2>
                    </div>
                    <div className="teacher">
                        <img class = "teacher-picture" src ={courseData[0].teacher.avatar}  alt = "Avatar Luciano Hulk"></img>
                        <div className="teacher-info">   
                            <h1 class="teacher-name"> {courseData[0].teacher.name} </h1>
                            <p> Professor responsável</p>
                        </div>
                    </div>
            </div>
            

                <div className = "blocks">
                    <Blocks2 number = {courseData[0].overview.nextActivities} info="Próximas atividades" icon= "fas fa-graduation-cap"/>
                    <Blocks2 number = {courseData[0].overview.credits} info="Créditos" icon="fas fa-tasks"/>
                    <Blocks2 number = {courseData[0].overview.enrolledStudents} info="Alunos matriculados" icon= "fas fa-user-graduate"/>
                </div> 
        </>
        ) : (<p>Carregando...</p>)
    }
        </div> 
     )
}   

export default Index