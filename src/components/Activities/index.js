import React from 'react'
import './styles.css'
import Rectangle from './Rectangle/index'


function index (){
    return(
        <div>
            <h1 className = "title" >Próximas atividades</h1>
            <div className="rectangle-box">
                <Rectangle subject = "Algoritmos e Programção" activity ="Enviar arquivo Peter Smoke" date = "20/11/2020"> </Rectangle>
                <Rectangle subject = "Projeto de Banco de Dados" activity ="Enviar o esquema MySQL" date = "20/11/2020"> </Rectangle>
            </div>

        </div>
    )
}
export default index

// image = "https://i.imgur.com/aadwyfC.jpg"
// image = "https://i.imgur.com/RgQrlAS.jpg" 