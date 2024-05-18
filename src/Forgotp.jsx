import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forgotp = () => {
  const [email,setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [ottp, setOttp] = useState('')
  const navigate = useNavigate() 

  const handleSubmit = (e)=>{
    const ot = Math.floor(Math.random()*9000+1000)
    setOttp(ot)
    console.log(ot);
    e.preventDefault();
     axios.post("https://crud-ba.onrender.com/forgotpass",{email,ot})
    .then(result=>{console.log(result,"podu");
    alert(result.data.status)
    navigate("/login")
    }).catch(err=>console.log(err))
  }
  const handleGet=(e)=>{
  if(otp === ottp){
    navigate("/resetpassword")
  }else{
    alert("not a match")
  }
  }

  return (
    <div className='total-page1'>
    <div className='login-form text-center' >
    <h2 className='tit p-2 m-2'>Reset Password</h2>
      <form>
      <div className='row gx-2 px-4 '>
      <input className='email px-4' placeholder='Email' onChange={(e)=>(setEmail(e.target.value))} ></input>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className='btn btn-primary' onClick={handleSubmit}>send otp</button>
      </div>
      <div className='row gx-2 px-4 '>
      <input className='email px-4' placeholder='otp' onChange={(e)=>(setOtp(e.target.value))} ></input>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button className='btn btn-primary' onClick={handleGet}>send otp</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Forgotp
