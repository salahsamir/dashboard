import axios from 'axios'
import React, {  useState } from 'react'


export default function Home() {
let [array,setarray]=useState([]);


  const options = {
    method: 'GET',
    url: 'http://localhost:5000/blog',
   
  };
  axios.request(options).then(function (response) {
   setarray(response.data.add)


  })
 

  return (
    <>
   <div className="container my-4 p-5 shadow ">
  <table className='table  text-center fs-2 text-white'>
    <thead className='my-3'>
    <th>Name</th>

      <th>Project</th>
    </thead>
    {array?
    <>
     {array.map(ele=>
      <tbody className=''>
        <tr className='my-4'>
        <td className='fs-2 text-info'>{ele.addBy.name}</td>

          <td className='fs-4 text-danger'>{ele.content}</td>
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
