import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
const [task,setTask] = useState('')

const usermail = localStorage.getItem("mail")
const email =usermail
const navigate = useNavigate()
const login = localStorage.getItem("loggedIn")

    const handleSubmit =()=>{
      if(login){
        axios.post("http://127.0.0.1:5001/addtask",{
            Task:task,
            email:email
        }).then((result)=>(console.log(result)))
        navigate("/")
        .catch((err)=>(console.log(err,"derror")))
      }else{
        console.log("register user first");
      }
    } 
  return (
    <div>
    <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <label>Task</label>
              <input
                type="text"
                
                placeholder="Enter Task Name"
                className="form-control"
                onChange={(e)=>{setTask(e.target.value)}}
              />
            </div>
           
            <div className="col-lg-12 mt-4">
              <input
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                value={"submit"}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Details
