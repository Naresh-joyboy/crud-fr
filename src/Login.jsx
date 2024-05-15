import React, { useState } from 'react'
import './App.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [email ,setEmail] =useState('');
  const [password ,setPassword] =useState('');
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const validation = {}
    if(!email.trim()){
      validation.email="email is required"
    }
    if(!password.trim()){
      validation.password="password is required"
    }
    setError(validation)
    if(Object.keys(validation).length === 0){
      axios.post("http://127.0.0.1:5001/login",{email,password})
    .then(data=>{console.log(data);
      if(data.data.status == "ok"){
        alert("login successful")
        localStorage.setItem("token",data.data.data.token)
        localStorage.setItem("loggedIn",true)
        navigate("/")
      }else{
        alert(`user not exist`)
      }
    }).catch(err=>console.log(err))
    
  }
    }
    

  return (
    <div className='total-page'>
    <div className='login-form text-center' >
    <h2 className='tit p-2 m-2'>Welcome</h2>
      <form>
      <div className='row gx-2 px-4 '>
      <input className='email px-4' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      {error.email && <span className="errorform">{error.email}</span>}
      <input className='password px-4' type='password' placeholder='password'  onChange={(e)=>setPassword(e.target.value)}></input>
      {error.password && <span className="errorform">{error.password}</span>}
      </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className='btn btn-outline-primary' onClick={handleSubmit}>login</button>
      </div>
      <hr/>
      <div>
      
      <br/>
      <Link to={"/register"}>Create account</Link>
      </div> 
    </div>
    </div>
  )
}

export default Login
