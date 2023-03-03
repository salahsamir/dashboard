import React, { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
export default function Add() {
  
  let [inputdata,setinputdata]=useState({
    "content":""
     })
let getinputdata=(e)=>{
      let user={...inputdata};
      user[e.target.id]=e.target.value;
      setinputdata(user);
      // console.log(user);
    
    }
    let clean=()=>{
      $('.add').fadeIn(500,function(){
        $('.add').fadeOut(500,function(){
          $('input').val('')
        })
      })
      

    }
    let api=()=>{
      const headers={
        'Content-Type':'application/json;charset=utf-8',
        'authorization':`salah${localStorage.getItem("token")}`
      }
        const options = {
          method: 'post',
          url: 'http://localhost:5000/blog',
          headers,
          data:inputdata
         
        };
        axios.request(options).then(function (response) {
         if(response.data.message==='done'){
          // console.log(response.data.message);
          clean()
         }
      
      
      
        })
    }
  return (
   <>
   
 <div className="conatiner">
 <div className='py-5 my-5 position-relative p-5 shadow'>
  <h1 className='text-white my-5'>ADD ANEW PROJECT</h1>
  <input type="text" onChange={getinputdata} placeholder='project' className='fs-3 w-100 py-2 my-3 form-control' id="content" />
   <button className='m-auto btn btn-outline-info' onClick={api}>add project</button>
  </div>
  <div className='add text-center border border-info rounded-4 bg-black p-5 position-absolute  my-5  '>
    <h2 className='text-success'> added successfully</h2>

  </div>
 </div>
   
   </>
  )
}
