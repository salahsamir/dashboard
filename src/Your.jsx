import axios from 'axios'
import React, {  useState } from 'react'


export default function Your() {
let [array,setarray]=useState([]);

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
 

  return (
    <>
   <div className="container my-4 p-5 shadow ">
  <table className='table text-center fs-2 text-white'>
    <thead>
      <th>Project</th>
      {/* <th>Name</th> */}
    </thead>
    {array?
    <>
     {array.map(ele=>
      <tbody>
        <tr className='my-4'>
          <td>{ele.content}</td>
          {/* <td>{ele.addBy.name}</td> */}
        </tr>
      </tbody>
      
      
      )}
    
    </>
    :""
  
  
  
  }
   


  </table>
  </div>
 
    
    
    </>
  )
}
