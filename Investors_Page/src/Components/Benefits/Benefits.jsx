import React from 'react'
import './benefits.scss'
import {faArrowTrendUp, faCalendar, faCalendarTimes, faClock, faHelmetUn, faLeaf, faMoneyBillTransfer, faShield, faThumbsDown, faThumbsUp, faTimeline} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const Benefits = () => {
  return (
    <div className='benefits'>
        <h1 className='benefitsHeader'>
            Invierte en Cohousing de alquiler -  <span style={{color: '#84bc41'}}>una oportunidad al alza.</span>
        </h1>
        <h2>
            Los Beneficios son muchos
        </h2>
        <div className="benefitsWrapper">
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faArrowTrendUp} className='cardIcon'/>
                    <h3 className='cardTitle'>Escalable</h3>
                </div>
                <div className="cardBottom">
                    50% cada año próximo
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className='cardIcon'/>
                    <h3 className='cardTitle'>Ingresos Recurrentes</h3>
                </div>
                <div className="cardBottom">
                    A 30 o 50 años
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faShield} className='cardIcon'/>
                    <h3 className='cardTitle'>Seguro</h3>
                </div>
                <div className="cardBottom">
                    32% de seniors que prefieren Cohousing
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faLeaf} className='cardIcon'/>
                    <h3 className='cardTitle'>Retorno ESG</h3>
                </div>
                <div className="cardBottom">
                    Integramos factores Environmental, Social y Governance
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faThumbsUp} className='cardIcon'/>
                    <h3 className='cardTitle'>Demanda Segura</h3>
                </div>
                <div className="cardBottom">
                    22 proyectos avanazdos en España. Mas de 200 en constitución.
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faCalendar} className='cardIcon'/>
                    <h3 className='cardTitle'>Largo Plazo</h3>
                </div>
                <div className="cardBottom">
                        Garantía y gestión segura y un 7% a largo plazo. Con toda confianza  
                </div>
            </div>
            <div className="benefitsCard">
                <div className="cardTop">
                    <FontAwesomeIcon icon={faHelmetUn} className='cardIcon'/>
                    <h3 className='cardTitle'>Objectivos Sostenibles</h3>
                </div>
                <div className="cardBottom">
                    Alineados con los Objectivos Sostenibles de la Agenda 2030
                </div>
            </div>
        </div>
        <a target='_blank' className='benefitsBtn' href='https://www.vidasostenible.info/invertir-en-cohousing'>Saber Más</a>
    </div>
  )
}

export default Benefits
