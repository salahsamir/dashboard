import React, { useState } from 'react'
import style from './join.module.css'
import axios from 'axios'
import Joi from 'joi'

import { useNavigate } from 'react-router-dom'

export default function Join() {
  let [loading,setloading]=useState(false)
  ////api error
let [errorapi,setarrorapi]=useState('')
/////to take copy from hook useNavigate
let navigate=useNavigate()
let navigate1=useNavigate()



  //// variable to save data on it
  let [inputdata,setinputdata]=useState({
 "name":"",
"email":"",
"password":"",
"cpassword":""

  })
  let[joierror,setjoierror]=useState([])
  /////function to get data from input to send >>>api
let getinputdata=(e)=>{
  let user={...inputdata};
  user[e.target.id]=e.target.value;
  setinputdata(user);
  // console.log(user);

}
////function to check input
let checkinput=async()=>{
  let {data}=await axios.post(`http://localhost:5000/auth/signup`,inputdata);
  // console.log(data.message);
  if(data.message==='done'){
    navigate(`/login`)
    setloading(false)
   
  }else{
    setloading(false)

    setarrorapi(data.message);

  }

}
let vlidjoi=()=>{
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    
 
    email:Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    cpassword:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

      
      });
      
      return schema.validate(inputdata,{abortEarly:false})
}

////function to submit 
  let submitform=(e)=>{
    e.preventDefault();////to agnore reload
    setloading(true)

    let valid=vlidjoi()
    console.log(valid);
    if(valid.error){
setjoierror(valid.error.details)
setloading(false)

    }
    else{
checkinput();
// setloading(false)


    };
  }

  function login(){
    navigate1('/login')
  }
  return (
    <>
    
    <div className={`${style.body}`}>
    <div className="container pt-5">
      <div className="  w-75 p-2 m-auto">
       
        <div className={`${style.page} shadow p-3 rounded-3 text-center`}>
       
          <h2 className={`${style.title} `}>
          Create My Account!
          </h2>
          <form onSubmit={submitform}>
           
          
          <div className={ `  `}>
          <input type="text" onChange={getinputdata} className={ ` ${style.input} w-100  form-control bg-dark border border-1 border-dark my-2   `} id='name' placeholder='name' />
          {joierror.filter((ele)=>ele.context.label=='name')[0]?
        <div className='alert alert-light text-start p-1 my-2'>
          
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='name')[0]?.message}
      
        </p></div>
     
     :''
        }

          </div>
         
            <input type="text" onChange={getinputdata} className={ ` ${style.input} w-100  form-control bg-dark border border-1 border-dark my-3  `} id='email' placeholder='email' />
            {joierror.filter((ele)=>ele.context.label=='email')[0]?
        
        <div className='alert alert-light text-start p-1 my-2'>
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='email')[0]?.message}
      
        </p>
        </div>
     
     :''
        }
            <input type="text" onChange={getinputdata} className={ ` ${style.input} w-100  form-control bg-dark border border-1 border-dark my-3  `} id='password' placeholder='password' />
            {joierror.filter((ele)=>ele.context.label=='password')[0]?
        
        <div className='alert alert-light text-start p-1 my-2'>
          
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='password')[0]?.message}
      
        </p></div>
     
     :''
        }
            <input type="text" onChange={getinputdata}  className={ ` ${style.input} w-100  form-control bg-dark border border-1 border-dark my-3  `} id='cpassword' placeholder='cpassword' />
            {joierror.filter((ele)=>ele.context.label=='')[0]?
        
          
        <div className='alert alert-light text-start p-1 my-2'>
        <p className={`${style.p} `}>
        {joierror.filter((ele)=>ele.context.label=='cpassword')[0]?.message}
      
        </p>
     
     </div>
     :''
        }
            {errorapi?<p className='alert alert-danger p-2 my-3'>{errorapi}</p>:''}
          
<button type='submit' className='form-control bg-dark border border-2 border-dark my-2 text-white py-2'>{loading==true?
            <i className='fas fa-spinner fa-spin'></i>:"Create Account"
            }</button>
<p className={`text-muted`}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
<div className={`${style.brdbottom}  m-auto`}></div>
<p className='my-2 text-muted'>Already a member? <button className='text-primary border border-0 bg-transparent' onClick={login}>Login></button>   </p>



          </form>

        </div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}
