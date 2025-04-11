import React, { useState } from 'react'
import { loginuser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Login({onlogin}) {
  const navigate=useNavigate()
  const [user,setuser]=useState({username:'',password:''})
  async function login(event){
    event.preventDefault()
    let res= await loginuser(user)
    console.log(res)
    let d=res.data['token']
    localStorage.setItem('token','token '+d)
    console.log(localStorage.getItem('token'))
    onlogin()
    navigate('/')
  }
  return (
    <div class="bg-secondary-subtle py-5">
      <div class="container-fluid bg-secondary-subtle py-5 mb-5">
            <div class="mx-auto w-50 p-5 bg-primary-subtle shadow my-5">
                <h2 class="mb-4">Enter Login Details</h2>
                <form onSubmit={login}>
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control" onChange={(event)=>{setuser({...user,username:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={(event)=>{setuser({...user,password:event.target.value})}}></input>
                </div>
                <div class="mt-4 text-center">
                    <input type="submit" class="btn btn-outline-primary"></input>
                </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default Login