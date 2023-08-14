import React from 'react'
import './infoTopCentre.scss'
import  {faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoTopCentre = () => {
  return (
    <div className='infoTopCentre'>
      <div className="infoWrapperCentre">
            <div className="infoTopCentreLeft">
            <img className='infoTopCentreImg' src='https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
            <div className="infoTopCentreRight">
              <h1><FontAwesomeIcon icon={faArrowLeft}/> Tecnología</h1>
                <h2 className='infoTextCentreTitle'>Utilizamos las últimas tecnologías</h2>
                <span className='infoTopCentreText'>
                Uno de los sistemas constructivos más importantes que recomendamos en este proyecto es la utilización de una máquina impresora 3D de viviendas y el bambú. Sin embargo, en la plataforma se presentarán diversas alternativas y propuestas para que los usuarios puedan explorar y elegir la que mejor se adapte a sus necesidades y principios.
                </span>
                <button>Saber Más</button>
            </div>
      </div>
    </div>
  )
}

export default InfoTopCentre
