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
             Cohousing: para una sociedad mejor.
            </h1>
            <h2>
            Inversión ODS en Cohousing
            </h2>
            <p>
            Invierte en Cohousing de alquiler. Con garantía y gestión segura y un 7% a largo plazo. Con toda confianza.
            </p>
            <a className='heroTitleBtn' target='_blank' href='https://www.vidasostenible.info/invertir-en-cohousing '>Saber Más</a> 
          </div>
            <div className='heroRight'>
              <div className="heroImgContainer">
                <img src={man} alt="Inversion Cohousing Happy" />
              </div>  
            </div>
      </div>
    </div>
  )
}

export default Hero
