import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getrecipedetail, updaterecipedetails } from '../services/Apicall'

function Update() {
  const [recipe,setrecipe]=useState({recipe_name:'', ingredients:'', instructions:'', mealtype:'', cuisine:'', image:null})
  const navigate=useNavigate()
  const {search}=useLocation()
  const queryParams=new URLSearchParams(search)
  const id=queryParams.get('id')

  async function fetchrecipe() {
    let res = await getrecipedetail(id)
    setrecipe(res.data)
  }
  async function recipeupdate(event) {
    event.preventDefault()
    const crecipe={...recipe}
    if(typeof crecipe.image=='string'){
      delete crecipe.image
    }
    let res =await updaterecipedetails(crecipe,id)
    console.log(res)
    navigate('/')
  }

  useEffect(()=>{fetchrecipe()},)
  return (
    <div>
      <div class="container-fluid bg-secondary-subtle py-5">
            <div class="mx-auto w-50 p-5 bg-primary-subtle shadow">
                <h2 class="mb-4">Edit Recipe Details</h2>
                <form onSubmit={recipeupdate}>
                <div class="mb-3">
                    <label class="form-label">Recipe Name</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,recipe_name:event.target.value})}} value={recipe.recipe_name}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Ingredients</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,ingredients:event.target.value})}} value={recipe.ingredients}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Instructions</label>
                    <textarea class="form-control" onChange={(event)=>{setrecipe({...recipe,instructions:event.target.value})}} value={recipe.instructions}></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Meal Type</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,mealtype:event.target.value})}} value={recipe.mealtype}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Cuisine</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,cuisine:event.target.value})}} value={recipe.cuisine}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image</label>
                    <img src={recipe.image} height="80px" width="80px" class='mb-1 ms-2' alt=''></img>
                    <input type="file" class="form-control" onChange={(event)=>{setrecipe({...recipe,image:event.target.files[0]})}}></input>
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

export default Update