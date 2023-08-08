import React, {useContext} from 'react'
import './nav.scss'
import {Link, useNavigate} from 'react-router-dom'
import { Context } from '../../Context/Context'

const Navbar = () => {
const nav = useNavigate()
const {user, dispatch} = useContext(Context)

const handleLogout = () => {
  try {
      dispatch({type: "LOGOUT"})
      nav('/login')
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className='nav'>
            <div className="left">
              <Link to='/' className='link'>
                    <span className='navItem'>Home</span>
              </Link>
            </div>
            <div className="right">
                  <span onClick={handleLogout} className='navItem'>Logout</span>
                  <span className='navItem'>Ajustes</span>
            </div>
    </div>
  )
}

export default Navbar
