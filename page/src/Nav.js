import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='w-full h-fit p-2 bg-slate-300 flex flex-row justify-between items-center gap-2'>
        <div className='text-xl font-bold sm:text-2xl'>Welcome to Home Page</div>
        <div className='w-fit h-fit flex flex-row justify-end items-center gap-3'>
        <Link to='./SignIn'>
        <button className='p-2 border-2 bg-gray-500 border-gray-800 rounded-lg hover:bg-slate-400'>Sign In</button>
        </Link>
        <Link to='./SignUp'>
        <button className='p-2 border-2 bg-gray-500 border-gray-800 rounded-lg hover:bg-slate-400'>Sign Up</button>
        </Link>
        </div>
    </div>
  )
}

export default Nav