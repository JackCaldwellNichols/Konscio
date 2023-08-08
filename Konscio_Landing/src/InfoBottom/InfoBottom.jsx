import React from 'react'
import './infoBottom.scss'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const InfoBottom = () => {
  return (
    
    <div className='info'>
        <div className="wrapper">
            <div className='infoHeader'>
                <h1 className='infoTitle'>Sostenibilidad. Felicidad.</h1>
            </div>
            <div className="infoMain">
                <div className="left">
                    <Fade left>
                        <img src='https://images.pexels.com/photos/3765030/pexels-photo-3765030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    </Fade>
                </div>
                <div className="right">
                    <Fade right>
                        <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Enim ut tellus elementum sagittis. Facilisis mauris sit amet massa. 
                        Leo integer malesuada nunc vel. Non blandit massa enim nec. 
                        Ac auctor augue mauris augue. 
                        Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Diam sit amet nisl suscipit. Quis varius quam quisque id diam vel quam elementum. 
                        Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. 
                        Elementum pulvinar etiam non quam lacus. 
                        Duis ut diam quam nulla porttitor massa id neque. 
                        </h4>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoBottom
