import React from 'react'
import { Link } from 'react-router-dom'
const ResponNav = () => {
  return (
    <div className='w-2/5 h-full relative flex justify-end items-start mt-0'>
        <div className='h-fit w-fit flex flex-col items-center gap-6 justify-end mr-5 absolute backdrop-blur-lg bg-opacity-10 p-5 rounded-xl border-2 border-black border-opacity-40 shadow-2xl'>
            <div>
                <Link to='/Home' className='text-sm font-bold text-center'>Home</Link>
            </div>
            <div>
                <Link to='/OwnPage' className='text-sm font-bold text-center'>Own Vehicles</Link>
            </div>
            <div>
                <Link to='/Places' className='text-sm font-bold text-center'>Famouse Places</Link>
            </div>
            <div>
                <Link to='/Documentation' className='text-sm font-bold text-center'>Documentation</Link>
            </div>
        </div>
    </div>
  )
}

export default ResponNav