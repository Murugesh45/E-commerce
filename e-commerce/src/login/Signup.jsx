import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form className='form'>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <label>Confirm Password</label>
            <input type="password"/>
            <Link to ="/"><button>Create Account</button></Link>
            <Link to ="/">Already have an Account</Link>
        </form>
    </div>
  )
}

export default Signup