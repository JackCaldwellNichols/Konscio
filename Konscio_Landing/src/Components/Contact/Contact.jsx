import React, {useState, useEffect, useRef} from 'react'
import './contact.scss'
import axios from 'axios'

const Contact = () => {

const nameRef = useRef()
const phoneRef = useRef()
const emailRef = useRef()
const timeRef = useRef()
const messageRef = useRef()
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [agree, setAgree] = useState(false);

const checkboxHandler = () => {
  // if agree === true, it will be set to false
  // if agree === false, it will be set to true
  setAgree(!agree);
  // Don't miss the exclamation mark
}

const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:8800/api/users', {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        time: timeRef.current.value,
        message: messageRef.current.value
      })
      setLoading(false)
    } catch (error) {
        setError(error.response.data)
        setLoading(false)
 
    }
}

  return (
    <div className='contact' id='contact'>
            <div className="contactTitle">
                <h1>¿Quieres formar parte de un futuro sostenbile?</h1>
                <h4>Mándanos tus datos de contacto y te informaremos más.</h4>
            </div>
            <div className="contactFormWrapper">
                <form className='contactFrom' onSubmit={handleSubmit}>
                    <div className="top">
                        <div className="left">
                            <input type="text" placeholder='Nombre' required ref={nameRef}/>
                            <input type="text" placeholder='Teléfono'required ref={phoneRef}/>                    
                        </div>
                        <div className="right">
                            <input type="email" placeholder='Correo electrónico' required ref={emailRef}/>
                            <input type="text" placeholder='¿En qué horario te llamamos?' ref={timeRef}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea placeholder='¿Qué es lo que te interesa?' ref={messageRef}/>
                        {loading === true ? (
                        <button type='submit' className='contactBtn'>Espera...</button>
                        ) : (
                        <button type='submit' className='contactBtn' disabled={!agree}>Enviar</button>
                        )}
                        {error && (<span style={{color: 'red', marginTop: '20px'}}>{error}</span>)}
                        <input type="checkbox" name="" id="agree" onChange={checkboxHandler}/>
                <label htmlFor="agree"> Acepto la <b>Política de Privacidad</b></label>
                    </div>
                </form>
  
            </div>
    </div>
  )
}

export default Contact
