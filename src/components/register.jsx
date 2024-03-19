import React from 'react'

function Register() {
  return (
    <div className='flex flex-col bg-white h-full w-full items-center justify-center py-10   '>
        <div className='flex flex-col   h-full items-center justify-center border-cyan-500 shadow-xl shadow-cyan-500/50 border-2 rounded-lg border-color: rgb(6 182 212) px-5 py-2 '>
        <h1 className='flex flex-col border-1 items-center text-4xl font-bold text-black my-1'>Sign up</h1>
        <p className='my-4 text-gray-400'>Create your account</p>
     
        <input className='border-2 rounded-lg bg-pink-100 shadow-xl shadow-pink-500/50 text-2xl hover:border-rose-500 my-3  pl-3 py-1 '
         type='name' placeholder='Name'>
        </input>
        <input className='border-2 rounded-lg bg-pink-100 shadow-xl shadow-pink-500/50 text-2xl hover:border-rose-500 my-3  pl-3 py-1 '
         type='email' placeholder='Email'></input>
        <input  className='border-2 rounded-lg bg-pink-100 shadow-xl shadow-pink-500/50 text-2xl  hover:border-rose-500 my-3  pl-3 py-1 '
         type='password' placeholder='password'>
        </input>
           
        <div className='rounded-full bg-fuchsia-700 shadow-xl shadow-fuchsia-500/50 text-2xl my-2 px-20 text-white onclick=focus:bg-red-500 '>
        <button >Sign up</button>
        </div>
        <div className='flex flex-row'>
        <p className='my-10'>Already have an account ?   </p>
        <p className='text-fuchsia-700 my-10 pl-5'> Login</p>
        </div>
        
        </div>
        </div>
  )
}

export default Register