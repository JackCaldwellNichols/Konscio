import React from 'react'
import './infoBottom.scss'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const InfoBottom = () => {
  return (
    
    <div className='info'>
        <div className="wrapper">
            <div className='infoHeader'>
                 <span className='infoTitle'>¿Y el Co-Housing es para mi?</span>
            </div>
            <div className="infoMain">
                <div className="right">
                  <div className="rightIntro">
                    <h3>Haces bien en preguntarlo</h3>
                    <EmojiObjectsIcon className='icon'/>
                  </div>
            
                        <h4>
                        Algunas personas anhelan la conexión social. 
                        El co-housing permite que todos se conecten entre sí y 
                        tengan roles únicos en la comunidad, lo que les brinda un sentido de propósito. 
                        Los residentes se unen para planificar eventos comunitarios, 
                        comidas y desarrollar relaciones. 
                        <br /><br />
                        Además de la conexíon social, es el entorno ideal para un envejecimiento activo y 
                        seguro. El Co-Housing ofrece la oportunidad
                        de vivir en tu propia cases y comunidad con seguridad, independencia
                        y comodidad. Contar con un sistema de apoyo a medida que envejecemos 
                        es fundamental para mejorar la calidad de vida. 
                        <br /><br />
                        Cuando vives en una comunidad con personas que tienen 
                        diferentes conjuntos de habilidades y experiencias, 
                        tendrás la oportunidad de aprender de ellos.
                        También, aportando tus conocimientos y experiencias 
                        puede enriquecer tanto a ti como
                        a los demás. 
                        <br /><br />
                        ¡Contacta con nosotros y te informamos más!
                        </h4>
                        <a className='infoBottomBtn' href='#contact'>Saber Más</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoBottom
