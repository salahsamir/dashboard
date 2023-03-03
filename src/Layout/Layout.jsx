import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Profile from '../Profile/Profile.jsx'


export default function Layout({userData,logout}) {
  console.log(userData);
  return (
 <>
 {/* <Navbar userData={userData} logout={logout}/> */}
 {userData?
<>
<div className="container">
  <div className="row  py-4">
    <div className="col-md-2 ">
      <h1 className='fs-1 text-white mb-5'>Dashboard</h1>
      <div className='d-flex flex-column bg-light p-3 rounded-4'>
      <Link to="home"><button className='px-5 fs-5 btn btn-outline-success mb-3'><i class="fa-solid fa-house"></i> Home </button></Link>
      <Link to="dash"><button className='px-5  btn btn-outline-success my-3'><i class="fa-solid fa-table-columns"></i> Dashbord</button></Link>
      <Link to="add"><button className='px-5 fs-5 btn btn-outline-success my-3'><i class="fa-solid fa-plus"></i> create project</button></Link>
      <Link to="your"><button className='px-5 fs-5 btn btn-outline-success my-3'>your projects</button></Link>
      </div>




    </div>
    <div className="col-md-6">
    <Outlet/>
    </div>
    <div className="col-md-4 text-start ps-5   py-5 rounded-2 profile ">
   <div className='bg-white p-3 rounded-3 shadow'>
   <ul className='fa-1x list-unstyled py-4 ps-5 text-black '>
            <li className='fs-3 '>name: {userData.name}</li>
            <li className='py-2 my-1 fs-4 '>email : {userData.email}</li>
           
        </ul>
      <Link  onClick={logout} className="ps-5" to='login' ><button className='btn btn-outline-success fs-5 '>Logout</button></Link>
      <h3 className='fs-6 my-2 text-muted mx-4'>2023 mern CRAD APP </h3>
   </div>


    </div>
  </div>
 

 </div>
 </>
 :
 <Outlet/> 



}
 </>
  )
}
