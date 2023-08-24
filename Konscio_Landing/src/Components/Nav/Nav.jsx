import React from 'react'
import './nav.scss'
import logo from '../../assets/FP.png'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Nav = ({open, setOpen}) => {

  console.log(open)

  return (
    <div className='nav'>
      <div className="left">
        <a href='https://proyectakonscio.org/' target='_blank'><img src={logo} alt="" /></a>
      </div>
      <div className="right">
        <a>For Investors</a>
         {open ? ( 
            <MenuOpenIcon className='hamburger' onClick={() => setOpen(false)}/>
         ) : (
            <MenuIcon className='hamburger' onClick={() => setOpen(true)}/>
         )
          }
      </div>
  
        <div className={'menuOpen ' + (open && 'active')}>
          <a>For Investors</a>
        </div> 
    

    </div>
  )
}

export default Nav
