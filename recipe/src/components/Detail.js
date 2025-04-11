import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { allreviews, deleterecipe, getrecipedetail } from '../services/Apicall'

function Detail() {
  const [recipe,setrecipe]=useState({})
  const navigate=useNavigate()
  const [reviews,setreview]=useState()
  const {search}=useLocation()
  const queryParams=new URLSearchParams(search)
  const id=queryParams.get('id')
  //console.log(id)

  async function fetchrecipedetail(){
    let res=await getrecipedetail(id)
    //console.log(res)
    setrecipe(res.data)
  }

  async function recipedelete(id){
    let res= await deleterecipe(id)
    console.log(res)
    if(res.status>199 && res.status<399)
      navigate('/')
    else{
      alert("cant delete, try again later")
    }
  }

  function recipeupdate(id){
    //console.log(id)
    navigate(`/update?id=${id}`)
  }

  async function review(id){
    let res=await allreviews(id)
    console.log(res)
    setreview(res.data)
  }

  function addreview(id){
    navigate(`/addreview?id=${id}`)
  }

  useEffect(()=>{fetchrecipedetail()},[])
  return (
    <div>
      <div class="container-fluid bg-secondary-subtle py-5">
        <div class="mx-auto w-50 p-4 bg-light">
          <img src={recipe.image} class="rounded rounded-3" style={{width:'100%', height:'400px'}}></img>
          <div class="mt-4">
            <table class="table table-bordered">
              <tbody>
                <tr><th>Recipe Name</th><td>{recipe.recipe_name}</td></tr>
                <tr><th>Ingredients</th><td>{recipe.ingredients}</td></tr>
                <tr><th>Instructions</th><td>{recipe.instructions}</td></tr>
                <tr><th>Meal Type</th><td>{recipe.mealtype}</td></tr>
                <tr><th>Cuisine</th><td>{recipe.cuisine}</td></tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-evenly px-5 pt-2">
            <button class="btn btn-outline-dark" onClick={()=>{recipedelete(recipe.id)}}>Delete</button>
            <button class="btn btn-outline-dark" onClick={()=>{recipeupdate(recipe.id)}}>Edit</button>
            <button class="btn btn-outline-dark" onClick={()=>{review(recipe.id)}}>Reviews</button>
            <button class="btn btn-outline-dark" onClick={()=>{addreview(recipe.id)}}>Add Review</button>
          </div>
          {reviews? <div class='mt-4'>
            <h4>Top Listed reviews</h4>
            {reviews.map((s)=><div class='mb-3 w-75 mx-auto border border-2 text-start ps-3 py-1'>
              <strong>{s.name}</strong><br></br>
              <strong class='fs-3'>{'★'.repeat(s.rating)}</strong><br></br>
              <span>{s.comment}</span><br></br>
              <small>Reviewed on {s.date}</small>
            </div>)}
          </div>:<></>}
        </div>
      </div>
    </div>
  )
}

export default Detail