import React from 'react'
import './styles.css'
import Resume3 from '../../components/Resume3'
import Rectangle from '../../components/Activities/Rectangle/'

function Index (){
    return(
        <div className="subject-page2">
            <div> 
                <Resume3/>
                <div className="rectangle-activity2">  
                    <h1 className="next-activity2">Próximas atividades</h1>  
                    <Rectangle image = "https://i.imgur.com/RgQrlAS.jpg" subject = "Projeto de Banco de Dados" activity ="Enviar o esquema MySQL" date = "10/10/2020"> </Rectangle>
                </div>
            </div>
            
            
        </div>
    )

}
export default Index 