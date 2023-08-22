import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import InfoTop from './Components/InfoTop/InfoTop'
import InfoTopCentre from './Components/InfoTopCentre/InfoTopCentre'
import InfoBottomCentre from './Components/InfoBottomCentre/InfoBottomCentre'
import Vision from './Components/Vision/Vision'
import Contact from './Components/Contact/Contact'
import Examples from './Components/Examples/Examples'
import Nav from './Components/Navigation/Nav'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import Cohousing from './Components/CoHousing/Cohousing'
import BannerBottom from './Components/BannerBottom/BannerBottom'
import Why from './Components/Why/Why'

function App() {

  return (
    <div className='app'>
      <Nav />
      <Hero />
      <Banner />
      {/* <Cohousing /> */}
      <Benefits /> 
      <BannerBottom />
      <hr />
      <InfoTop /> 
      <hr />
      <InfoTopCentre />
      <hr />
      <InfoBottomCentre />
      <hr />
      <hr />
      {/* <Examples /> */}
      <Why />
      <Vision />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
