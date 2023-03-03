
import {  createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Join from './join/Join';
import Layout from './Layout/Layout';
import Login from './login/Login';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Profile from './Profile/Profile';
import Dashord from './Dashord';
import Add from './Add';
import Your from './Your.jsx';




function App() {
  let [userData,setuserData]=useState(null)
  let savedata=()=>{
    let encoded=localStorage.getItem('token');
    let decode=jwtDecode(encoded)
    setuserData(decode);
    
  }
  useEffect(()=>{
if(userData){
  savedata()
}

  },[])


  let logout=()=>{
    localStorage.removeItem('token');
    setuserData(null);
    <Navigate to='login'> </Navigate>
  }


  let routes=createHashRouter([
    {path:'/',element:<Layout userData={userData} logout={logout}/>,children:[
      {path:'home',element:  <Home userData={userData}/>},
      {index:true,element:<Login savedata={savedata} />},
      {path:'login',element:<Login savedata={savedata}/>},
      {path:'profile',element: <Profile userData={userData}/>},
      {path:'join',element:<Join/>},
      {path:'dash',element:<Dashord/>},
      {path:'add',element:<Add/>},
      {path:'your',element:<Your/>}

    ]}
  ])
  return (
  <>
 
  
  <RouterProvider router={routes}/>
  
  

  </>
  );
}

export default App;
