import React, {useRef, useContext}  from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import axios from 'axios'
import { Context } from '../../Context/Context'

const Login = () => {


const nav = useNavigate()
const {dispatch, isFetching} = useContext(Context)
const userRef = useRef()
const passwordRef = useRef()

const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post('http://localhost:8800/api/auth/login', {
            username: userRef.current.value,
            password: passwordRef.current.value
        })
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        nav('/')
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className='login'>
      <div className="loginWrapper">
            <h1>Login</h1>
            <form className='loginForm' onSubmit={handleLogin}>
                <input type="username" ref={userRef} required/>
                <input type="password" ref={passwordRef} required/>
                <button type='submit'>Login</button>
            </form>
      </div>
    </div>
  )
}

export default Login
