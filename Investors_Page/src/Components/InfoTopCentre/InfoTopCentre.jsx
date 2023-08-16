import React from 'react'
import './infoTopCentre.scss'
import  {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoTopCentre = () => {
  return (
    <div className='infoTopCentre'>
      <div className="infoWrapperCentre">
            <div className="infoTopCentreLeft">
            <img className='infoTopCentreImg' src='https://www.fmb.org.uk/static/92dc88f0-dbd6-4824-83e4bc0e4c2e0ae5/800x600_highestperformance__4a7c7e45a350/Supplied-by-Future-FusionDec21Loyn-Co-Architects-and-Kebony.jpg' alt="" />
            </div>
            <div className="infoTopCentreRight">
              <h1 className='techTitle'><FontAwesomeIcon icon={faArrowLeft} style={{color: '#84bc41'}} className='arrowLeft'/> Tecnología</h1>
                <h2 className='infoTextCentreTitle'>Utilizamos las últimas tecnologías</h2>
                <span className='infoTopCentreText'>
                Uno de los sistemas constructivos más importantes que recomendamos en este proyecto es la utilización de una máquina impresora 3D de viviendas y el bambú. Sin embargo, en la plataforma se presentarán diversas alternativas y propuestas para que los usuarios puedan explorar y elegir la que mejor se adapte a sus necesidades y principios.
                </span>
                <a href='#contact' className='saber'>Saber Más</a>
            </div>
      </div>
    </div>
  )
}

export default InfoTopCentre
