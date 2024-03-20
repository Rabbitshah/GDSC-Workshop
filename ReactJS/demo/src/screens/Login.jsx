import React,{ useState } from 'react';
import { Link } from 'react-router-dom'

function Login({setIsLogin}) {



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const  handleLogin = () => {
    console.log("pressed")
    console.log("Email ", email)
    console.log("Password", password)
    setIsLogin(true)
  }
  return (
    <div className='flex flex-col w-full items-center justify-center h-screen'>
      <div className='flex flex-col border-2 border-black h-auto p-10 rounded-lg'>
        <h1 className='text-5xl font-semiBold '>Login</h1>
        <p className='my-5'>Enter your details</p>
        <input className='outline-none text-3xl p-2 border-b-2 border-black' type="email" placeholder='Username' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input className='outline-none text-3xl p-2 border-b-2 border-black mt-4' type="password" placeholder='Password' value={password} onChange={(p)=>{setPassword(p.target.value)}}/>
        <button onClick={handleLogin} className='bg-red-600 mt-4 text-white py-3 rounded-lg'>Login</button>
        <Link  to="/register">
          <p className='mt-2 text-center'>New user?</p>
        </Link>
      </div>
    </div>
  )
}

export default Login
