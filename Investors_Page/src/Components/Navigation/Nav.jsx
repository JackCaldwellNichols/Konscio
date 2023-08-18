import React from 'react'
import './nav.scss'
import logo from '../../assets/FP.png'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <a href="https://proyectakonscio.org/" target='_blank'><img src={logo} alt="Fundación Proyecta Konscion Logo" className='logo'/></a>
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faPhone}/>
        <a className='btn' href='#contact'>¡Te llamamos!</a>
      </div>
    </div>
  )
}

export default Nav
