import React from 'react'
import './infoTop.scss'
import {faArrowRight, faArrowTrendUp, faLeaf, faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoTop = () => {
  return (
    <div className='infoTop'>
           <h1 className='infoWrapperTitle'>Lo que <span style={{color: '#84bc41'}}>ofrecemos</span></h1>
      <div className="infoWrapper">
            <div className="infoTopLeft">
                <h1>Colaboración <FontAwesomeIcon icon={faArrowRight} style={{color: '#84bc41', paddingLeft: '5px'}}/></h1>
                <h2 className='infoTextTitle'>Fomentamos una comunidad colaborativa</h2>
                <span className='infoText'>
                A traves de <a href="https://proyectakonscio.org/web-rtc-espacio-3d" target='_blank'>nuestra plataforma</a>, fomentamos una comunidad colaborativa, donde personas interesadas en el co-housing y la construcción sostenible, 
                    podrá conectarse y compartir ideas a través de tecnologías innovadoras como el 3D y las salas webRTC. 
                    La interactividad permitirá que los usuarios creen vínculos sólidos y 
                    fomenten la confianza necesaria para embarcarse juntos en el proceso de buscar terrenos, 
                    decidir el sistema constructivo y constituirse en una cooperativa. iti.
                </span>
                <a href='https://proyectakonscio.org/blog/proyectos/plataforma-digital-konsciohousing' className='saber' target='_blank'>Saber Más</a>
            </div>
            <div className="infoTopRight">
                <img className='infoTopImg' src='https://images.pexels.com/photos/5553128/pexels-photo-5553128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="CoHousing Plataforma Konscio" />
            </div>
      </div>
    </div>
  )
}

export default InfoTop
