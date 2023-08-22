import React from 'react'
import './coHousing.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Cohousing = () => {
  return (
    <div className='coHouseTop'>
        <div className="wrapperTop">
            {/* <div className='infoTopHeader'>
                 <h1 className='infoTopTitle'>¿Y Qué es el <span style={{color: '#84bc41'}}>Cohousing?</span></h1>
            </div> */}
            <div className="infoTopMain">
                <div className="leftTop">
                    <div className="leftIntro">
                      {/* <h3>Buena pregunta</h3>
                      <ThumbUpIcon className='icon'/> */}
                    </div>
                       
                            <h4>
                                El Co-Housing es una forma de vida colaborativa, donde
                                los grupos colaborativas, cada uno o en pareja, posees un
                                apartamento privado para  preservr suintimidad y comparten grandes
                                áreas comunes y actividades en talleres, excursiones, fiestas, 
                                conciertos, sin olvidar la asistencia médica cuando lo precisan.
                                <br /><br />
                                No hay jerarquías, y los roels se reparten de forma natural.
                                La economía es privada, y las viviendas cuentan con todos los elementos
                                que aseguran la independencia de los residentes. A pesar de ello, o
                                justamente por este motivo, existen zonas comunes significativas, que se 
                                comprenden como extensión de las viviendas cuta administración sigue
                                a cargo del grupo que habita la comunidad.
                            </h4>
                            {/* <a className='infoTopBtn' href='#contact'>Saber Más</a> */}
                </div>
                {/* <div className="rightTop">
                        <img src='https://cdn.pixabay.com/photo/2018/08/18/08/05/people-3614311_1280.jpg'/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Cohousing
