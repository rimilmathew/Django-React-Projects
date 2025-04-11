import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { recipesearch } from '../services/Apicall'

function Search() {
  const [recipe,setrecipe]=useState([])
  const navigate=useNavigate()
  const {search}=useLocation()
  const queryParams=new URLSearchParams(search)
  const w=queryParams.get('word')

  async function searchrecipe(){
    let res= await recipesearch(w)
    console.log(res.data)
    setrecipe(res.data)
  }

  function detailrecipe(i){
    navigate(`/detail?id=${i}`)
  }
  
  useEffect(()=>{searchrecipe()},[])
  return (
    <div>
      <div class='container mt-5'>
        {Array.isArray(recipe)?
        <>
        <h2 class='fw-bold mb-5'>Search Results</h2>
        <div class="row">
        {recipe.map((s)=><div class="col-md-4 mb-3">
          <div class="card" style={{width: "21rem"}}>
          <img src={s.image} style={{height: "240px"}} class="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">{s.recipe_name}</h5>
              <a class="btn btn-primary" onClick={()=>{detailrecipe(s.id)}}>Details</a>
            </div>
          </div>
        </div>)}
      </div></>:<h2>No Results Found</h2>}
      </div>
    </div>
  )
}

export default Search