import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addreviews } from '../services/Apicall'

function Addreview({islogin}) {
  const [review,setreview]=useState({'id':'','rating':'','comment':''})
  const navigate=useNavigate()
  const {search}=useLocation()
  const queryParams=new URLSearchParams(search)
  const id=queryParams.get('id')
  
  async function addreview(event){
    event.preventDefault()
    const review1={...review,id:id}
    //console.log(review1)
    let res= await addreviews(review1)
    console.log(res)
    navigate(`/detail?id=${id}`)

  }
  return (
    <div class="bg-secondary-subtle py-5">
      {islogin?
      <div class="container-fluid bg-secondary-subtle py-5 mb-5">
            <div class="mx-auto w-50 p-5 bg-primary-subtle shadow my-5">
                <h2 class="mb-4">Add Review</h2>
                <form onSubmit={addreview}>
                <div class="mb-3">
                    <label class="form-label">Comments</label>
                    <textarea class="form-control" onChange={(event)=>{setreview({...review,comment:event.target.value})}} placeholder='Enter your comment here'></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Rating</label>
                    <input type="number" class="form-control" onChange={(event)=>{setreview({...review,rating:event.target.value})}} placeholder='Enter rating' max="5" min="1"></input>
                </div>
                <div class="mt-4 text-center">
                    <input type="submit" class="btn btn-outline-primary"></input>
                </div>
                </form>
            </div>
        </div>:<div class="container-fluid bg-secondary-subtle py-5 my-5 lr">
        <div class="mx-auto w-50 p-4 bg-primary-subtle shadow rounded my-5">
          <h2>Login required</h2>
        </div>
        </div>
        }
    </div>
  )
}

export default Addreview