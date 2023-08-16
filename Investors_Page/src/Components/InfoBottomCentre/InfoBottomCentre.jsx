import React from 'react'
import './infoBottomCentre.scss'
import  {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const InfoBottomCentre = () => {
  return (
    <div className='infoBC'>
      <div className="infoBCWrapper">
            <div className="infoBCLeft">
              <h1>Experiencia <FontAwesomeIcon icon={faArrowRight} style={{color: '#84bc41'}}/></h1>
                <h2 className='infoBCTextTitle'>Contamos con una amplia experienca</h2>
                <span className='infoBCText'>
                    Los proyectos son orientadas 
                    y dirigidos por profesionales con amplia trayectoria en el sector. 
                </span>
                <a href='https://www.vidasostenible.info/red-especialistas/' target='_blank'>Saber Más</a>
            </div>
            <div className="infoBCRight">
                <img className='infoBCImg' src='https://www.insight.com/content/insight-web/en_US/what-we-do/industries/construction-technology/jcr%3acontent/full-width-hero-section/column_layout_copy_5/-column-1/column_layout_copy/-column-2/insight_image.img.jpg/1680111046630.jpg' alt="" />
            </div>
      </div>
    </div>
  )
}

export default InfoBottomCentre
