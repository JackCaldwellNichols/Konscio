import React from 'react'
import './hero.scss'
import Nav from '../Nav/Nav'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="nav">
        <Nav />
      </div>
        <div className="wrapper">
            <div className="left">
                <h1 className="titleMain">Una vida sostenible.</h1>
                <h1 className="titleMain">Una comunidad.</h1>
                <h1 className="titleMain">Una vida sin incertidumbre y sobrecostes.</h1>
            </div>
            <div className="right">
                <p>
                Vivimos en tiempos de incertidumbre, sobrecostes y soledad. <br />
                Necesitamos cambiar el camino. <br />
                Necesitamos una vida colaborativa. <br />
                Necesitamos una vida equilibrada con el medio ambiente. <br />
                Necesitamos una vaida de felicidad. <br />
                En Fundación Proyecta, tenemos la solución.
                Cohousing.
                </p>
                <br />
                <a href='#contact'>Saber Más</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
