import React from 'react'

export default function Profile({userData}) {
    console.log(userData);
  return (
<>

<div className="container w-100 h-100 m-5 p-5 d-flex justify-content-center align-items-center">
 <div className="content  shadow border border-1 w-50 ">
 <div className=" p-5">
    
    
        <ul className='fa-1x list-unstyled py-3'>
            <li className='fs-4 text-white'>name: {userData.name} {userData.last_name }</li>
            <li className='py-2 my-2 fs-4 text-white'>email : {userData.email}</li>
           
        </ul>
    
    
 </div>
 </div>
    
</div>

</>
  )
}
