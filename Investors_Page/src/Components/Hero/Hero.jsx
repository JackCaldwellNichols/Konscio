import React from 'react'
import './hero.scss'
import FP from '../../assets/FP.png'
import man from '../../assets/man.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
          <div className="heroTitleLeft">
             <h1>
             El Co-Housing: para una sociedad mejor.
            </h1>
            <h3>
                En la sociedad actual existen 2 fórmulas para acceder a una vivienda. En la Fundación Proyecta Konscio, en colaboración con Vida Sostenible, te proponemos una tercera: El Cohousing.
            </h3>
            <button className='heroTitleBtn'>Saber Más</button> 
          </div>
            <div className='heroRight'>
              <div className="heroImgContainer">
                <img src={man} alt="" />
              </div>  
            </div>
      </div>
    </div>
  )
}

export default Hero
