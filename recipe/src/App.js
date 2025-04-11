import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Addreview from './components/Addreview';
import Detail from './components/Detail';
import Search from './components/Search';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useEffect, useState } from 'react';


function App() {
  const [islogin,settoken]=useState(false)
  function checkloginstatus(){
    let token=localStorage.getItem('token')
    settoken(!(!token))
  }

  useEffect(()=>{checkloginstatus()},[])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar islogin={islogin} onlogout={checkloginstatus}/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login onlogin={checkloginstatus}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/addreview' element={<Addreview islogin={islogin}/>}></Route>
      <Route path='/detail' element={<Detail/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
