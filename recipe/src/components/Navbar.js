import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logoutuser } from '../services/Apicall'

function Navbar({islogin,onlogout}) {
  const navigate=useNavigate()
  const [w,setw]=useState('')
  async function logout(){
    let res=await logoutuser()
    console.log(res)
    localStorage.removeItem('token')
    onlogout()
  }

  function input(event){
    setw(event.target.value)
  }
  function search(){
    navigate(`/search?word=${w}`)
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-success-subtle">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4 ms-5" href="#">Food Recipe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
        <li class="nav-item">
          <Link to="/" class="nav-link" aria-current="page">Home</Link>
        </li>
        {!islogin &&(
          <>
          <li class="nav-item">
        <Link to="/register" class="nav-link">Register</Link>
        </li>
        <li class="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
        </li>
          </>
        )}
        {islogin &&(
          <>
           <li class="nav-item">
          <a class="nav-link" onClick={logout}>Logout</a>
        </li>
          </>
        )}
      </ul>
        <input class="form-control me-2 w-25" type="search" placeholder="Search" onChange={input} aria-label="Search"></input>
        <button class="btn btn-outline-success" onClick={search}>Search</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar