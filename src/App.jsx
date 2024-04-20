import './App.css'
import Login from './Login'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import UserDetails from './UserDetails'
import Navbar from './Navbar'
import Details from './Details'
import Shownavbar from './Shownavbar'
import { useState } from 'react'
import Update from './Update'

function App() {
  const logIn =localStorage.getItem("loggedIn")


  return (
    <BrowserRouter>
    <Shownavbar>
    <Navbar/>
    </Shownavbar>
    <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/' element={<UserDetails />}/>
     <Route path='/details' element={<Details />}/>
     <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
    
}

export default App
