import React, { useEffect, useState } from 'react'
import { getallrecipes } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [recipe,setrecipe]=useState([])
  const navigate=useNavigate()
    async function fetchrecipes(){
        let res=await getallrecipes()
        console.log(res)
        setrecipe(res.data)
    }

    function detailrecipe(i){
      navigate(`/detail?id=${i}`)
    }

    function addrecipe(){
      navigate('/add')
    }

    useEffect(()=>{fetchrecipes()},[])
  return (
    <div>
      <div class='container mt-5'>
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
        </div>
        <div class="d-flex justify-content-center mt-4 mb-5">
          <button class="btn btn-outline-dark" onClick={addrecipe}>Add New Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default Home