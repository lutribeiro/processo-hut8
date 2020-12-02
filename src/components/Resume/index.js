import './styles.css'
import Blocks from './Blocks/index'
import React, { useEffect, useState } from 'react'
import { getInfo } from '../../services/requests'

function Index() {
    const [resumeData, setresumeData] = useState(null)

    useEffect(() => {
        getInfo().then(res =>{
            setresumeData(res.data[0].overview)
        })
    }, [])

    return (
        <div className="resume-dashboard"> 
            
            <h1 className ="title-resume">Resumo</h1>
            <div className = "blocks">
               {resumeData ? (
                    <>
                        <Blocks number = {resumeData.enrolledCourses} info="Cursos Matriculados" icon= "fas fa-graduation-cap"/>
                        
                        <Blocks number = {resumeData.nextActivities} info="Atividades próximas" icon= "fas fa-tasks"/>
                        
                        <Blocks number = {resumeData.onlineStudents} info="Alunos online" icon= "fas fa-user-graduate"/>
                    </>
                )
            : 
               (
                <p>Carregando...</p>
               )
                }
            </div>
        </div>     
        )
}   

export default Index
