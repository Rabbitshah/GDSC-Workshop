import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register({isLogin}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const  handleSignUp = () => {
    console.log(email + " " + password) 
    console.log(name)
    console.log("pressed")

  }
  return (
    
    <div className='flex flex-col w-full items-center justify-center h-screen'>
      <h1>{isLogin ? "Is logged in " : "Need to login"}</h1>
      <div className='flex flex-col border-2 border-black h-auto p-10 rounded-lg'>
        <h1 className='text-5xl font-semiBold '>Sign-Up</h1>
        <p className='my-5'>Enter your details</p>
        <input className='outline-none text-3xl p-2 border-b-2 border-black' type="text" placeholder='Name' value={name} onChange={(n)=>{setName(n.target.value)}}/>
        <input className='outline-none text-3xl p-2 border-b-2 border-black focus:border-blue mt-4 mb-4 ' type="email" placeholder='Username' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input className='outline-none text-3xl p-2 border-b-2 border-black' type="password" placeholder='Password' value={password} onChange={(p)=>{setPassword(p.target.value)}}/>
        <button onClick={handleSignUp} className='bg-red-600 mt-4 focus:bg-green-600 text-white py-3 rounded-lg'>Create</button>
        
        {isLogin ? <h1>User is logged in no need to register </h1> :
        <Link  to="/">
          <p className='mt-2 text-center'>Already have an account? Login</p>
        </Link>                
        }

      </div>
    </div>
      

  )
}

export default Register
