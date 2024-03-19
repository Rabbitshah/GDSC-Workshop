import React from 'react'

function Login() {
  return (
    <div className='flex flex-col w-full items-center justify-center h-screen'>
      <div className='flex flex-col border-2 border-black h-auto p-10 rounded-lg'>
        <h1 className='text-5xl font-semiBold '>Login</h1>
        <p className='my-5'>Enter yout details</p>
        <input className='outline-none text-3xl p-2 border-2 border-black rounded-lg' type="email" placeholder='Username'/>
        <input className='outline-none text-3xl p-2 border-2 border-black mt-4 rounded-lg' type="password" placeholder='Password'/>
        <button className='bg-red-600 mt-4 text-white py-3 rounded-lg'>Login</button>
      </div>
    </div>
  )
}

export default Login
