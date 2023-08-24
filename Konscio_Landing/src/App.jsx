import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import InfoTop from './Components/InfoTop/InfoTop'
import InfoBottom from './Components/InfoBottom/InfoBottom'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Benefits from './Components/Benefits/Benefits'
import Felicidad from './Components/Felicidad/Felicidad'
import Vision from './Components/Vision/Vision'
import Feliz from './Components/Felicidad copy/Feliz'
import './App.css'




function App() {

  const [open, setOpen] = useState(false)
  return (
    <div className='app'>
      <Hero open = {open} setOpen={setOpen}/>
      <InfoTop />
      <Felicidad />
      <InfoBottom /> 
      <Feliz />
      <Benefits />
      <Vision />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default App
