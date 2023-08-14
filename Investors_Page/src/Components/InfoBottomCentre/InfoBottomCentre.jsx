import React from 'react'
import './infoBottomCentre.scss'
import  {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoBottomCentre = () => {
  return (
    <div className='infoBC'>
      <div className="infoBCWrapper">
            <div className="infoBCLeft">
              <h1>Experiencia <FontAwesomeIcon icon={faArrowRight}/></h1>
                <h2 className='infoBCTextTitle'>Contamos con una amplia experienca</h2>
                <span className='infoBCText'>
                    Los proyectos son orientadas 
                    y dirigidos por profesionales con amplia trayectoria en el sector. 
                </span>
                <button>Saber Más</button>
            </div>
            <div className="infoBCRight">
                <img className='infoBCImg' src='https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
      </div>
    </div>
  )
}

export default InfoBottomCentre
