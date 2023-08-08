import React from 'react'
import './home.scss'
import SideBar from '../Components/SideBar/SideBar'
import Main from '../Components/Main/Main'

const Home = () => {
  return (
    <div className="home">
    <SideBar />
    <Main />
  </div>
  )
}

export default Home
