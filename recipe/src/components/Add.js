import React, { useState } from 'react'
import { addnewrecipe } from '../services/Apicall'

function Add() {
    const [recipe,setrecipe]=useState({recipe_name:'', ingredients:'', instructions:'', mealtype:'', cuisine:'', image:null})
    async function addrecipe(event){
        event.preventDefault()
        //console.log(recipe)
        let res = await addnewrecipe(recipe)
        console.log(res)
    }
  return (
    <div>
        <div class="container-fluid bg-secondary-subtle py-5">
            <div class="mx-auto w-50 p-5 bg-primary-subtle shadow">
                <h2 class="mb-4">Enter Recipe Details</h2>
                <form onSubmit={addrecipe}>
                <div class="mb-3">
                    <label class="form-label">Recipe Name</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,recipe_name:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Ingredients</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,ingredients:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Instructions</label>
                    <textarea class="form-control" onChange={(event)=>{setrecipe({...recipe,instructions:event.target.value})}}></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Meal Type</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,mealtype:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Cuisine</label>
                    <input type="text" class="form-control" onChange={(event)=>{setrecipe({...recipe,cuisine:event.target.value})}}></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image</label>
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

export default Add