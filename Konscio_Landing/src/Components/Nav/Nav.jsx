import React from 'react'
import './nav.scss'
import logo from '../../assets/FP.png'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <a href='https://proyectakonscio.org/' target='_blank'><img src={logo} alt="" /></a>
      </div>
      <div className="right">
        <span>For Investors</span>
      </div>
    </div>
  )
}

export default Nav
