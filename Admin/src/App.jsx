import { useState } from 'react'
import Navbar from './Components/Nav/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataList from './Pages/DataList'
import Login from './Pages/Login/Login'
import { Context } from './Context/Context'
import { useContext } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const {user} = useContext(Context)
  return (
    <>
    <BrowserRouter>
    {user ? <Navbar /> : null }
    <Routes>
      <Route path='/' element={user ? <Home /> : <Login />}/> 
      <Route path='/login' element={<Login />}/> 
      <Route path='/data-list' element={user ? <DataList /> : <Login />}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
