import axios from 'axios';
import React, { useState } from 'react'
import $ from 'jquery'

export default function Dashord() {

  let [array,setarray]=useState([]);
  let [deleteflag,setflag]=useState(false);
  let [deleted,setdelete]=useState(false);
  let [update,setupdate]=useState(false)
  let [up,setup]=useState()

const headers={
  'Content-Type':'application/json;charset=utf-8',
  'authorization':`salah${localStorage.getItem("token")}`
}
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/user',
    headers
   
  };
  axios.request(options).then(function (response) {
   setarray(response.data.user[0].blogs)
  //  console.log(array);
  })
  let deletefunc=(ele)=>{
    setdelete(ele)
   if(deleteflag){
  
    setflag(false)
   }else{
    
    setflag(true)
    

   }

  }
  let delete_element=(ele)=>{
    // console.log(ele);
     let deleteele={
    _id:ele._id
   }
     const deletes = {
    method: 'delete',
    url: 'http://localhost:5000/blog',
    headers,
    data:deleteele
   
  };
  axios.request(deletes).then(function (response) {
    
    // console.log(response);
   })
  }
  let [inputdata,setinputdata]=useState({
    "content":"",
    "_id":""
     })
     let getinputdata=(e)=>{

let user={...inputdata};
      user[e.target.id]=e.target.value;
      setinputdata(user);
      // console.log(user);
    
    }
let updatefunc=(ele)=>{
  setup(ele)
  setupdate(true)
}


let updeted=(ele)=>{
   inputdata._id=ele._id
 
  const options = {
    method: 'patch',
    url: 'http://localhost:5000/blog',
    headers,
    data:inputdata
   
  };
  axios.request(options).then(function (response) {
  console.log(response);
   setupdate(false)
    
   })

}
  return (
    <div>

<div className="container my-4 ">
 {deleteflag?
 
 <div className='bg-white rounded-4 py-3 w-25 position-fixed border border-1 border-info top-50 start-50 translate-middle'>
 <h3 className='p-3'>do you want to delete it?</h3>
 <button className='btn btn-outline-info  mx-4 float-end' onClick={()=>{
  setflag(false)
 delete_element(deleted)
  
 }} >OK</button>
 <button className='btn btn-outline-info  mx-4 ' onClick={()=>{
  setflag(false)
  


 }}>cancle</button >
</div>
 :""

 }
 {
  update?
  <>
  <div className='p-5 rounded-4 bg-light position-fixed top-50 start-50 translate-middle '>
    <h2>Update Project</h2>
    <input type="text"  id='content' placeholder={up.content}   onChange={getinputdata} className='form-control my-3 fs-1 content'  />
    <button className='btn btn-outline-info' onClick={()=>{
      updeted(up)
    }}>Update</button>
  </div>
  
  
  </>
  :""
 }
  <table className='table text-center fs-2 text-white'>
    <thead className='my-3'>
      <th>Project</th>
      <th>Update</th>
      <th>Delete</th>
    </thead>
    {array?
    <>
     {array.map(ele=>
      <tbody>
        <tr className='my-4  '>
          <td>{ele.content}</td>
          <td><button className='btn btn-outline-warning ' onClick={()=>{
            updatefunc(ele)
          }}><i class="fa-regular fa-pen-to-square fs-3 text-info"></i></button></td>
          <td><button className='btn btn-outline-danger' onClick={()=>{
            deletefunc(ele)
          }}><i class="fa-solid fa-trash fs-3 text-info"></i></button></td>

          {/* <td>{ele.addBy.name}</td> */}
        </tr>
      </tbody>
      
      
      )}
    
    </>
    :""
  
  
  
  }
   


  </table>
  </div>



    </div>
  )
}
