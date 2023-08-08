import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import InfoTop from './Components/InfoTop/InfoTop'
import InfoBottom from './InfoBottom/InfoBottom'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Benefits from './Components/Benefits/Benefits'



function App() {


  return (
    <div>
      <Hero />
      <InfoTop />
      <InfoBottom /> 
      <Benefits />
       <Contact /> 
       <Footer />
    </div>
  )
}

export default App
