import React from 'react'
import './infoTop.scss'
import {faArrowRight, faArrowTrendUp, faLeaf, faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoTop = () => {
  return (
    <div className='infoTop'>
           <h1 className='infoWrapperTitle'>Lo que ofrecemos</h1>
      <div className="infoWrapper">
            <div className="infoTopLeft">
                <h1>Colaboración <FontAwesomeIcon icon={faArrowRight} style={{color: 'rgb(17, 89, 17)', paddingLeft: '5px'}}/></h1>
                <h2 className='infoTextTitle'>Fomentamos una comunidad colaborativa</h2>
                <span className='infoText'>
                A traves de nuestra plataforma, fomentamos una comunidad colaborativa, donde personas interesadas en el co-housing y la construcción sostenible, 
                    podrá conectarse y compartir ideas a través de tecnologías innovadoras como el 3D y las salas webRTC. 
                    La interactividad permitirá que los usuarios creen vínculos sólidos y 
                    fomenten la confianza necesaria para embarcarse juntos en el proceso de buscar terrenos, 
                    decidir el sistema constructivo y constituirse en una cooperativa. iti.
                </span>
                <button>Saber Más</button>
            </div>
            <div className="infoTopRight">
                <img className='infoTopImg' src='https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            </div>
      </div>
    </div>
  )
}

export default InfoTop
