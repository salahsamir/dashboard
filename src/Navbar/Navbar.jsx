import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar({userData,logout}) {




  return (
 <>
    <nav className="navbar navbar-expand-lg bg-dark-50 shadow navbar-dark ">
  <div className={`${style.text} container`}>
    <Link className="navbar-brand d-flex" to='home'>
      
      <h5 className={`${style.text} m-2 p-1`}>CRUDS</h5>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

       
        {userData?
       <>
        {/* <li className="nav-item">
         <Link className="nav-link text-white mx-3"to='home'>home</Link>
       </li> */}
         <li className="nav-item">
         <Link className="nav-link text-white mx-3"to='profile'>Profile</Link>
       </li>
        <li className="nav-item">
        <Link className="nav-link text-primary mx-3  border border-primary rounded-3  px-3" onClick={logout} to='login' >Logout</Link>
        

        
        </li>
       </>
        
      :<>
      <li className="nav-item">
          <Link className="nav-link text-white mx-3"to='login'>Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-primary mx-3  border border-primary rounded-3 px-3"to='join' >Join Free</Link>

        
        </li>
      
      
      
      </>
      }
      
      </ul>
    </div>
  </div>
</nav>

 </>

  )
}
