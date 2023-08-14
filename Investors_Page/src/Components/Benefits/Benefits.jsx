import React from 'react'
import './benefits.scss'
import {faArrowTrendUp, faLeaf, faMoneyBillTransfer, faShield, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const Benefits = () => {
  return (
    <div className='benefits'>
        <h1 className='benefitsHeader'>Los beneficios de invertir en el Co-Housing</h1>
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
                    Integramos factores ESG
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
        </div>
        <button className='benefitsBtn'>Saber Más</button>
    </div>
  )
}

export default Benefits
