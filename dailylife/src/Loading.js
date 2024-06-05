import React from 'react'
import { useEffect } from 'react';
const Loading = () => {
    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
    
        // Cleanup function to re-enable scrolling when the component is unmounted
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <div className='h-screen w-screen text-9xl flex justify-center items-center bg-black'>
        <div className='text-4xl text-white text-center sm:text-9xl'>Loading...</div>
    </div>
  )
}

export default Loading