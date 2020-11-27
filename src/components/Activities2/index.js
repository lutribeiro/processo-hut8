import React from 'react'
import './styles.css'
import Rectangle2 from './Rectangle2/index'


function index (){
    return(
        <div className="activity2">
            <div className = "title-activity"> <h1>Meus cursos</h1> </div>
            <div className="rectangle-box">
                <Rectangle2 image = "https://i.imgur.com/dSG2ZLX.jpg" graduate = "Graduação" subject ="Algoritmo e Programação" class = "M72"> </Rectangle2>
                <Rectangle2 image = "https://i.imgur.com/GpfCzWB.jpg" graduate = "Graduação" subject ="Projeto de Banco de Dados" class = "M52"> </Rectangle2>
            </div>

        </div>
    )
}
export default index