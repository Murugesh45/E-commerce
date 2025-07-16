import React, { useState } from 'react'
import "./Login.css"
import actionObj from '../actionObj' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
 
function Login() {
  const dispatch=useDispatch()
  const[user,setUser]=useState()
  const[pass,setPass]=useState()
  
   
   const userName=(e)=>{
    if(e.target.value===""){
      alert("username is required")
    }
    else{
      Start()
    }
  
  }
  
  const Password=(e)=>{
    if(e.target.value===" "){
      setPass("username is required")
    }
    else{
      Start()
    }
  }



  const Start=()=>{
    
    dispatch(actionObj())
  }
  return (
    <div className='log'>
      <div className="log1">
         <div className="input1">
            <h1>Login</h1>
            <input type='text' placeholder='username' className='text' onChange={userName}/>
            <p style={{color:"red"}}>{user}</p>
            <input type="password" placeholder='password 'className='pass'onChange={Password}/>
            <p style={{color:"red"}}>{pass}</p>
            <button onClick={Start}>Login</button>
            <p>Don't have an account?<Link to="/signup">create account</Link></p>
        </div>
      </div>
        
    </div>
  )
}

export default Login