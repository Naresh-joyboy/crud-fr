import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const login = localStorage.getItem("loggedIn")
    const navigate = useNavigate()

    const handleOut =()=>{
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("mail")
        navigate("/login")
      }
    
      const handlein =()=>{
        localStorage.getItem("loggedIn")
        navigate("/login")
    }

  return (
    <div>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <button
      id="sidebarToggleTop"
      className="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i className="fa fa-bars"></i>
    </button>
    <div className='container'>
    <h2 style={{marginRight:"20px", color: "blue" }}> Pheniox</h2>

    <ul className="navbar-nav ml-auto">
    
      <li className="nav-li1">
        <Link to={"/"}>Home</Link>
      </li>

      <div className="topbar-divider d-none d-sm-block"></div>
      <div className='login-name'>{name}</div>
      {login?
      <button className="btn btn"onClick={handleOut}>Logout</button>:
      <button className="btn btn"onClick={handlein}>Login</button>
    }
    </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
