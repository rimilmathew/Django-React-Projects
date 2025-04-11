import axios from 'axios'

export async function getallrecipes(){
    return await axios.get('http://127.0.0.1:8000/recipes/')
}

export async function getrecipedetail(id){
    return await axios.get(`http://127.0.0.1:8000/recipes/${id}`)
}

export async function deleterecipe(id){
    return await axios.delete(`http://127.0.0.1:8000/recipes/${id}/`)
}

export async function addnewrecipe(data){
    let h={'content-type':'multipart/form-data'}
    return await axios.post('http://127.0.0.1:8000/recipes/',data,{headers:h})
}

export async function updaterecipedetails(data,id){
    let h={'content-type':'multipart/form-data'}
    return await axios.put(`http://127.0.0.1:8000/recipes/${id}/`,data,{headers:h})
}

export async function createuser(data){
    return await axios.post('http://127.0.0.1:8000/users/',data)
}

export async function loginuser(data){
    return await axios.post('http://127.0.0.1:8000/login/',data)
}

export async function logoutuser(){
    let token = localStorage.getItem('token')
    let h = {'Authorization':token}
    return await axios.get('http://127.0.0.1:8000/logout',{headers:h})
}

export async function recipesearch(w){
    let p={'search':w}
    return await axios.get('http://127.0.0.1:8000/search',{params:p})
}

export async function allreviews(id){
    return await axios.get(`http://127.0.0.1:8000/reviewlist/${id}`)
}

export async function addreviews(data){
    let token = localStorage.getItem('token')
    let h = {'Authorization':token}
    return await axios.post('http://127.0.0.1:8000/createreview',data,{headers:h})
}