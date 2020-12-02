import React, { useEffect, useState } from 'react'
import { getInfo } from '../../services/requests'
import './styles.css'
import Rectangle from './Rectangle/index'


function Index (){
    const [activityData, setactivityData] = useState(null)

    useEffect(() => {
        getInfo().then(res =>{
            setactivityData(res.data[0].nextActivities)
        })
    }, [])

    return(
        <div>
            <div className = "sub-title"> <h1>Próximas atividades</h1> </div>
            <div className="rectangle-box">
                { activityData ?    (
                    <>
                        <Rectangle image = {activityData[0].image} 
                                   subject = {activityData[0].course} 
                                   activity = {activityData[0].title} 
                                   date = {activityData[0].deadline}/>

                        <Rectangle 
                                   image = {activityData[1].image} 
                                   subject = {activityData[1].course} 
                                   activity = {activityData[1].title}  
                                   date= {activityData[1].deadline}/> 
                    </>

                ) :(<p>Carregado..</p>)
                }
                </div>
            </div>
    )
}
export default Index

