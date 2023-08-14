import React from 'react'
import './nav.scss'
import logo from '../../assets/FP.png'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <img src={logo} alt="" className='logo'/>
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faPhone}/>
        <span>¡Te llamamos!</span>
      </div>
    </div>
  )
}

export default Nav
