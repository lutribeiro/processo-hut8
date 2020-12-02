import React, {useEffect, useState} from 'react'
import {getInfo} from '../../services/requests'
import './styles.css'
import Rectangle2 from './Rectangle2/index'


function Index (){
    const [activity2Data, setactivity2Data] = useState(null)
  
  useEffect(() =>{
    getInfo().then((res) => {
      setactivity2Data(res.data[0].courses)
    })
  }, [])

    return(
        <div className="activity2">
            <div className = "title-activity"> <h1>Meus cursos</h1> </div>
            <div className="rectangle-box">
                { activity2Data ? (
                    <>
                        <Rectangle2 image = {activity2Data[0].image}  
                                    graduate = {activity2Data[0].type}
                                    subject ={activity2Data[0].course}
                                    class = {activity2Data[0].class}/>

                        <Rectangle2 image = {activity2Data[1].image} 
                                    graduate = {activity2Data[1].type} 
                                    subject2 ={activity2Data[1].course}  
                                    class = {activity2Data[1].class}/> 
                    </>
             ):(<p>Carregando..</p>)
                }
            </div>
        </div>
    )
}
export default Index