import React from 'react'

function Register() {
  return (
    <div>
        <div className='flex flex-col w-full items-center justify-center h-screen'>
      <div className='flex flex-col border-2 border-black h-auto p-10 rounded-lg'>
        <h1 className='text-5xl font-semiBold '>Sign-Up</h1>
        <p className='my-5'>Enter yout details</p>
        <input className='outline-none text-3xl p-2 border-b-2 border-black' type="text" placeholder='Name'/>
        <input className='outline-none text-3xl p-2 border-b-2 border-black focus:border-blue mt-4 mb-4 ' type="email" placeholder='Username'/>
        <input className='outline-none text-3xl p-2 border-b-2 border-black' type="password" placeholder='Password'/>
        <button className='bg-red-600 mt-4 focus:bg-green-600 text-white py-3 rounded-lg'>Create</button>
        <p className='flex flex-col items-center'>Already have an account? Login</p>
      </div>
    </div>
      
    </div>
  )
}

export default Register
