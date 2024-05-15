import React, { useState } from 'react'
import './App.css'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom'


const Register = () => {
  const [name ,setName] =useState('');
  const [email ,setEmail] =useState('');
  const [password ,setPassword] =useState('');
  
  const navigate =useNavigate()
 


const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post("http://127.0.0.1:5001/register",{name,email,password})
    .then(result=>{console.log(result);
      navigate("/login")
    }).catch(err=>console.log('ddd',err))
    
  }

  return (
    <div className='total-page'>
    <div className='login-form text-center' >
    <div className='recaptcha-container'></div>
    <h3 className='tit m-3'>Welcome</h3>
    
      <form >
      <div className='row gx-2 px-4 '>
      <input className='username px-4 mg-5' placeholder='Username' onChange={(e)=>setName(e.target.value)}></input>
      <input className='email px-4' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      
      <input className='password px-4' placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className='btn3 btn btn-outline-primary' onClick={handleSubmit}>Register</button>
      </div>
      <hr/>
      <div>
     
      <br/>
      <Link to={"/"}>Have an account</Link>
      </div>
      
    </div>
    </div>
  )
}

export default Register
  
