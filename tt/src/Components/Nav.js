import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ResponNav from './ResponNav';
const Nav = ({color}) => {
    const [winht, setwinht] = useState(window.innerHeight<600);
    const handleresize =() =>{
        const currentWidth = window.innerWidth;  
        const isSmall = currentWidth <600;
        if(isSmall){
      document.addEventListener('mousedown', handleClick);
        }
        else{
        document.removeEventListener('mousedown', handleClick);
        }
        setwinht(isSmall);
    };
    const handleClick = (e) => {
        if(navref && !navref.current.contains(e.target)){
            btnref.current.style.display = 'block';
            navref.current.style.display = 'none';
        }
    }
    useEffect(() => {
        
      window.addEventListener('resize', handleresize);
      return () => {
        window.removeEventListener('resize', handleresize);
      }
    }, []);
    const btnref = useRef(null);
    const navref = useRef(null);
    const handlebtn = () => {
        btnref.current.style.display = 'none';
        navref.current.style.display = 'block';
    }
  return (
    <div style={{background:color}} className='h-24 w-full flex flex-row justify-between items-center sm:gap-10'>
        <div className=' h-3/6 text-4xl ml-2 w-fit font-bold text-purple-800 sm:ml-10 lg:ml-20 sm:h-full flex items-center lg:text-4xl sm:text-3xl'>
        <div>Trip Tally</div>
        </div>
        { winht ?
        <>
        <button ref={btnref} className='text-xl p-4 rounded-full h-fit w-fit bg-red-300 border-2 border-red-500 hover:bg-red-400' onClick={handlebtn}>
            <img src='https://cdn-icons-png.flaticon.com/512/82/82122.png' alt='icon' className='w-5'/>
        </button>
        {
        <div ref={navref} className='w-fit h-fit hidden'>
            <ResponNav/>
        </div>
        }
        </>
         :
        <div className='h-3/6 w-fit flex items-center gap-6 justify-end mr-5 md:gap-9 md:mr-20 sm:h-full'>
            <div className='p-2'>
                <Link to='/Home' className='text-base md:text-lg lg:text-xl text-center'>Home</Link>
            </div>
            <div>
                <Link to='/OwnPage' className='text-sm md:text-lg lg:text-xl text-center'>Own Vehicles</Link>
            </div>
            <div>
                <Link to='/Places' className='text-sm md:text-lg lg:text-xl text-center'>Famouse Places</Link>
            </div>
            <div>
                <Link to='/Documentation' className='text-base md:text-lg lg:text-xl text-center'>Documentation</Link>
            </div>
        </div>}
    </div>
  )
}

export default Nav