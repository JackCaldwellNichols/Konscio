import React from 'react'
import './hero.scss'
import Nav from '../Nav/Nav'

const Hero = ({open, setOpen}) => {

  return (
    <div className='hero'>
        <Nav open={open} setOpen={setOpen} className='heroNav'/>
        <div className={"wrapper " + (open && 'active')}>
            <div className="left">
                <h1 className="titleMain">Para una vida más plena,</h1>
                <h1 className="titleMain">con privacidad,</h1>
                <h1 className="titleMain">autonomía y apoyo mutuo.</h1>
                <h1 className="titleMain">A cualquier edad.</h1>
            </div>
            <div className="right">
                <p>
               Crea la comunidad soñada. <br />
                Viva una vida sostenible. <br />
                Comparte los momentos importantes con queridos. <br />
                En Fundación Proyecta Konscio, con la colabaración de Vida Sostenible, podemos conseguirlo. <br />
                El  <b style={{color: '#84bc41'}}>Cohousing.</b>
                </p>
                <br />
                <a href='#contact'>Saber Más</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
