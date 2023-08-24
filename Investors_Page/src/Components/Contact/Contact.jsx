import React, {useState, useEffect, useRef} from 'react'
import './contact.scss'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

const [loading, setLoading] = useState(false)
const [agree, setAgree] = useState(false);
console.log(agree)
const {
  register,
  handleSubmit,
  reset,
  formState: { errors }
} = useForm();

const checkboxHandler = () => {
  // if agree === true, it will be set to false
  // if agree === false, it will be set to true
  setAgree(!agree);
  // Don't miss the exclamation mark
}

const toastifySuccess = () => {
  toast("Gracias! Te contactaremos pronto", {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    theme:"light",
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success',
    toastId: 'notifyToast'
  })
}

const toastifyError = () => {
  toast("Ayy! Algo ha salido mal. Inténtalo de nuevo por favor.", {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    theme:"light",
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success',
    toastId: 'notifyToast'
  })
}



const onSubmit = async (data) => {
  setLoading(true)
  const { name, email, telephone, time, message } = data;
  try {
    const templateParams = {
      name,
      email,
      time,
      telephone,
      message
    };
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      import.meta.env.VITE__EMAILJS_SERVICEID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBKEY,
    );
      toastifySuccess()
      reset()
      setLoading(false)
  } catch (e) {
    toastifyError()
    setError(false)
  }
};

  return (
    <div className='contact' id='contact'>
            <div className="contactTitle">
                <h1>Cuéntanos cómo prefieres invertir</h1>
                <h4>Para ofrecerte una solución adecuada, segura y ética</h4>
            </div>
            <div className="contactFormWrapper">
                <form className='contactFrom' onSubmit={handleSubmit(onSubmit)}>
                    <div className="top">
                        <div className="left">
                            <input type="text" placeholder='Nombre'  name="name"   {...register('name', {
                                  required: { value: true, message: 'Please enter your name' },
                                  maxLength: {
                                  value: 30,
                                  message: 'Please use 30 characters or less'
                                  }
                                })}/>
                            <input 
                            type="text" 
                            placeholder='Teléfono' 
                            name='telephone' 
                            {...register('telephone', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                            }
                          })} required/>                    
                        </div>
                        <div className="right">
                            <input 
                            type="email" 
                            placeholder='Correo electrónico' 
                            name='email' 
                            {...register('email', {
                              required: true,
                              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            required/>
                            <input 
                            type="text" 
                            placeholder='¿En qué horario te llamamos?' 
                            name='time'
                             {...register('time', {
                              required: true,
                            })}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea 
                        placeholder='¿Qué es lo que te interesa?' 
                        name='message' 
                        {...register('message', {
                        required: true
                      })}/>
                      {!loading ? (
                        <button type='submit' className={'contactBtn ' + (!agree && "disabled")} disabled={!agree}>Enviar</button>
                      ): (
                        <button type='submit' className='contactBtn'>
                          <FontAwesomeIcon icon={faCircleNotch} spin/>
                        </button>
                      )}
                          <ToastContainer />
                        <div className="contactBtnWrapper">
                          <input type="checkbox" className='agree' id="agree" onChange={checkboxHandler} required/>
                          <label htmlFor="agree"> Acepto la <b>Política de Privacidad</b></label>
                        
                        </div>
                    </div>
                </form>
  
            </div>
    </div>
  )
}

export default Contact
