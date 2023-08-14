import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import InfoTop from './Components/InfoTop/InfoTop'
import InfoBottom from './InfoBottom/InfoBottom'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Benefits from './Components/Benefits/Benefits'
import Felicidad from './Components/Felicidad/Felicidad'
import Feliz from './Components/Felicidad copy/Feliz'
import './App.css'




function App() {


  return (
    <div className='app'>
      <Hero />
      <InfoTop />
      <Felicidad />
      <InfoBottom /> 
      <Feliz />
      <Benefits />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default App
