import React from 'react'
import './vision.scss'
import vision from '../../assets/vision.png'
import mission from '../../assets/mission.png'

const Vision = () => {
  return (
    <div className='vision'>
         <h1 className="vistionTitle">
          Somos conscientes. 
          Somos <span style={{color: '#84bc41'}}>Konscio. </span>
          Somos <span style={{color: '#84bc41'}}>Vida Sostenible.</span>
         
         </h1>
      <div className="visionWrapper">
        <div className="visionLeft">
            <div className="visionLeftTop">
                <h4>Nuestra Misión</h4>
            </div>
            <div className="visionLeftBottom">
                <span className='VisionLeftBtmText'>
                  Facilitamos el desarrollo humano 
                  con Proyectos de Vida para 
                  comunidades saludables y colaborativas 
                  entre personas afines 
                  en viviendas privativas y servicios (Cohousing).
              </span>
                <img src={mission} alt="Fundación Proyecta Konscio Misión" />
            </div>
        </div>
        <div className="visionRight">
            <div className="visionRightTop">
                <h4>Nuestra Visión</h4>
            </div>
            <div className="visionRightBottom">
                <span className='VisionRightBtmText'>
                  Comunidades y personas más felices 
                  en su medio ambiente, 
                  facilitando el desarrollo humano mantenido
                  de "abajo a arriba", por el bien común.
                </span>
                <img src={vision} alt="Fundación Proyecta Konscio Visión" />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Vision
