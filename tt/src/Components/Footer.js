import React, { useState } from 'react'

const Footer = () => {
    const [email, setemail] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div className=' h-60 w-full bg-[#B5DFFE] rounded-2xl flex flex-col'>
        <div style={{height:'60%'}} className='w-full flex flex-row justify-center'>
            <div className='w-1/2 h-full flex flex-col justify-center ml-2 mt-3 sm:ml-20 md:ml-40'>
            <h1 className='text-3xl'>Explore Now</h1>
            <div className=' p-8 flex flex-col text-sm'>
                <h2>Vehicles</h2>
                <h2>Places</h2>
            </div>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-3'>
            <div className='h-3/6 flex justify-start items-center w-full'>
            <h1 className='text-xl font-semibold'>Get in touch with us:-</h1>
            </div>
            <form className='w-full h-2/6' onSubmit={(e)=>handleSubmit(e)}>
            <label className='p-3 border-2 border-black rounded-xl'>
                <input required type='email' placeholder='youremail.com' value={email} onChange={(e)=>setemail(e.target.value)} className='w-4/6 bg-[#B5DFFE] focus:outline-none'></input>
                <input type='submit' value='Submit' className='w-1/6 text-xs md:text-base rounded-xl bg-purple-400 p-1 hover:bg-purple-500 cursor-pointer'></input>
            </label>
            </form>
            </div>
        </div>
        <div style={{height:'40%'}} className='w-full text-center flex justify-between items-center'>
        <h1 className='text-3xl w-2/6 text-purple-600 font-bold sm:text-4xl'>Trip Tally</h1>
        <h2 className='w-3/6 mr-28 text-sm md:text-xl'>© 2024 Team - 77 - IITP_BS_CSDA_B1. All Rights Reserved.</h2>
        <a href='www.github.com' className='w-1/6 h-full flex justify-end items-center'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github icon' className='h-2/6 mr-7'/></a>
        </div>
    </div>
  )
}

export default Footer