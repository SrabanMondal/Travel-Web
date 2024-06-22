import React from 'react'

const Head = () => {
  return (
    <div className='w-full h-96 flex'>
        <div className='w-4/12 h-full flex justify-center items-center md:w-1/2'>
        <div className='h-4/5 w-11/12 ml-2 flex flex-col gap-3 md:ml-20'>
            <h2 className='text-base sm:text-xl md:text-2xl'>Planning to go for a  Relaxing Drive <br/>or a Vacation !!!</h2>
            <h1 className='text-lg sm:text-2xl md:text-3xl font-semibold text-purple-600'>Calculate Your Travel Expense<br/>with Us<br/>Plan with us</h1>
            <button className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full mt-4 w-fit'>Explore Now</button>
        </div>
        </div>
        <div className='w-8/12 h-full flex justify-center md:1/2'>
            <img src='https://media.istockphoto.com/id/1212951825/vector/funny-family-driving-in-red-car-on-weekend-holiday.jpg?s=612x612&w=0&k=20&c=n5uAlIiunxIVCSZnzRXkHn138azn-6ijnjO6lHdN1OU=' alt='trip'
            className='h-full'/>
        </div>
    </div>
  )
}

export default Head