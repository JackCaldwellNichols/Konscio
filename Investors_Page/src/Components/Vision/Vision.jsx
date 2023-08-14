import React from 'react'
import './vision.scss'
import vision from '../../assets/vision.png'
import mission from '../../assets/mission.png'

const Vision = () => {
  return (
    <div className='vision'>
         <h1 className="vistionTitle">Todos juntos podemos construir una mañana más proactiva y transcendente.</h1>
      <div className="visionWrapper">
        <div className="visionLeft">
            <div className="visionLeftTop">
                <h4>Nuestra Misión</h4>
            </div>
            <div className="visionLeftBottom">
                <span className='VisionLeftBtmText'>Nuestra programa, Konsciohousing, pretende promover conciencia sobre alternativas de vivienda comunitaria con finalidades de residencia permanente sostenible utilizando tecnología punta.</span>
                <img src={mission} alt="" />
            </div>
        </div>
        <div className="visionRight">
            <div className="visionRightTop">
                <h4>Nuestra Visión</h4>
            </div>
            <div className="visionRightBottom">
                <span className='VisionRightBtmText'>Empoderar a los ciudadanos a participar de proyectos cooperativos de residencia para vivir en comunidad, en sintonía con el medioambiente y con una visión integrada entre generaciones.</span>
                <img src={vision} alt="" />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Vision
