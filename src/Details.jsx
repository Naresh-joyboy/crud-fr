import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
const [author,setAuthor] = useState('')
const [isbnno,setIsbnno] = useState('')
const [title,setTitle] = useState('')
const [date,setDate] = useState('')
const [had,setHad] = useState('')
const [image,setImage] = useState('')
const usermail = localStorage.getItem("mail")
const email =usermail
const navigate = useNavigate()
const login = localStorage.getItem("loggedIn")

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (login) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        try {
          const result = await axios.post("http://localhost:5001/details", {
            image: reader.result,
            author,
            isbnno,
            title,
            date,
            had,
            email
          });
          console.log(result);
          navigate("/");
        } catch (err) {
          console.log(err, "Error in submitting details");
        }
      };
    } else {
      console.log("Please register first");
    }
  };
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
            <div className="col-lg-4">
            <label>Attachment</label>
              <input
                type="file"
                accept='image/*'
                className="form-control"
                onChange={(e)=>{setImage(e.target.files[0])}}
              
              />
              <p>size under 30kb</p>
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



// for multer to image upload save in file

// const handleSubmit =(e)=>{
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("image",image)
//   formData.append("Author", author)
//   formData.append("ISBNNumber", isbnno)
//   formData.append("Title", title)
//   formData.append("PublishDate", date,)
//   formData.append("HadBuy" ,had)
//   formData.append("email",email)
//   if(login){
//     axios.post("http://localhost:5001/details",formData)    
//     .then((result)=>{console.log(result)
//     navigate("/")
//   })
//     .catch((err)=>(console.log(err,"derror")))
//   }else{
//     console.log("register user first");
//   }     
// } 