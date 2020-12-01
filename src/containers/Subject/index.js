import React from 'react'
import './styles.css'
import Resume2 from '../../components/Resume2'
import Rectangle from '../../components/Activities/Rectangle/'



function Index(){
    return(
        <div className="subject-page">
            <div> 
                <Resume2/>
                <div className="rectangle-activity">  
                    <h1 className="next-activity">Próximas atividades</h1>  
                     <Rectangle image = "https://i.imgur.com/aadwyfC.jpg" subject = "Algoritmos e Programação" activity ="Enviar arquivo Peter Smoke" date = "20/11/2020"> </Rectangle>               
                </div>
            </div>
            
            
        </div>

    )
}
export default Index
