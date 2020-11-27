import React from 'react'
import './styles.css'
import Rectangle from './Rectangle/index'


function index (){
    return(
        <div>
            <div className = "sub-title"> <h1>Próximas atividades</h1> </div>
            <div className="rectangle-box">
                <Rectangle image = "https://i.imgur.com/aadwyfC.jpg" subject = "Algoritmos e Programação" activity ="Enviar arquivo Peter Smoke" date = "20/11/2020"> </Rectangle>
                <Rectangle image = "https://i.imgur.com/RgQrlAS.jpg" subject = "Projeto de Banco de Dados" activity ="Enviar o esquema MySQL" date = "20/11/2020"> </Rectangle>
            </div>

        </div>
    )
}
export default index

