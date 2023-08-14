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

function App() {

  return (
    <div className='app'>
      <Nav />
      <Hero />
      <Benefits />
      <hr />
      <InfoTop /> 
      <hr />
      <InfoTopCentre />
      <hr />
      <InfoBottomCentre />
      <hr />
      <hr />
      {/* <Examples /> */}
      <Vision />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
