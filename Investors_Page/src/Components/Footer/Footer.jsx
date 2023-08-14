import React from 'react'
import './footer.scss'
import {  } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FP from '../../assets/FP.png'
// import VS from '../../assets/VS.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
          <div className="fundacionProyecta">
            <div className="orgImg">
              <img src={FP} alt="Fundación Social" />
            </div>
            <div className="orgInfo">
              <span className='orgName'>Fundación Proyecta</span>
              <span className='orgName'>www.fundacionproyecta.org</span>
            </div>
          </div>
          <div className="vidaSostenible">
            <div className="orgImg">
              <img src='' alt="Fundación Social" className='orgImage'/>
            </div>
            <div className="orgInfo">
              <span className='orgName'>Vida Sostenible</span>
              <span className='orgName'>www.vidasostenible.info</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightWrapper">
            <span className='rightText'>Contacto</span>
            <span className='rightText'>Aviso Legal</span>
            <span className='rightText'>Uso de Cookies</span>
            <span className='rightText'>Política de Privacidad</span>
          </div>
            <div className="iconWrapper">
            <FontAwesomeIcon  />
            </div>
        </div>
    </div>
  )
}

export default Footer