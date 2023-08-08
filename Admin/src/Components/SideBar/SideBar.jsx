import React from 'react'
import './side.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <Link to={'/data-list'} className='link'>
          <li>People</li>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar
