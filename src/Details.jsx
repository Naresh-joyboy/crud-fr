import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
const [author,setAuthor] = useState('')
const [isbnno,setIsbnno] = useState('')
const [title,setTitle] = useState('')
const [date,setDate] = useState('')
const [had,setHad] = useState('')
const usermail = localStorage.getItem("mail")
const email =usermail
const navigate = useNavigate()
const login = localStorage.getItem("loggedIn")

    const handleSubmit =()=>{
      if(login){
        axios.post("http://localhost:5001/details",{
            Author: author,
            ISBNNumber: isbnno,
            Title: title,
            PublishDate: date,
            HadBuy: had,
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
              <label>Author</label>
              <input
                type="text"
                
                placeholder="Enter Author Name"
                className="form-control"
                onChange={(e)=>{setAuthor(e.target.value)}}
              />
            </div>
            <div className="col-lg-4">
              <label>ISBNNumber</label>
              <input
                type="text"
                
                className="form-control"
                onChange={(e)=>{setIsbnno(e.target.value)}}
              />
            </div>
            <div className="col-lg-6">
              <label>Title</label>
              <input
                type="text"
                
                className="form-control"
                onChange={(e)=>{setTitle(e.target.value)}}
              />
            </div>
            <div className="col-lg-4">
              <label>PublishDate</label>
              <input
                type="Date"
                
                className="form-control"
                onChange={(e)=>{setDate(e.target.value)}}
              />
            </div>
            <div className="col-lg-4">
              <label>Had / Should Buy</label>
              <input
                type="text"
                
                className="form-control"
                onChange={(e)=>{setHad(e.target.value)}}
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
