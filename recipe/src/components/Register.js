import React, { useState } from 'react'
import { createuser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [user,setuser]=useState({username:'',password:'',email:'',first_name:'',last_name:''})
  const navigate=useNavigate()
  async function register(event){
    event.preventDefault()
    let res= await createuser(user)
    console.log(res)
    navigate('/login')
  }
  return (
    <div>
      <div class="container-fluid bg-secondary-subtle py-5">
            <div class="mx-auto w-50 p-5 bg-primary-subtle shadow">
                <h2 class="mb-4">Enter User Details</h2>
                <form onSubmit={register}>
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control" onChange={(event)=>{setuser({...user,username:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" onChange={(event)=>{setuser({...user,password:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type='email' class="form-control" onChange={(event)=>{setuser({...user,email:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Last name</label>
                    <input type="text" class="form-control" onChange={(event)=>{setuser({...user,first_name:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">First name</label>
                    <input type="text" class="form-control" onChange={(event)=>{setuser({...user,last_name:event.target.value})}}></input>
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

export default Register