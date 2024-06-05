import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const date = new Date();
  const month = date.getMonth();
  console.log(month);
  let url;
  if(month>4 && month<9){
    url='https://png.pngtree.com/background/20210710/original/pngtree-e-commerce-taobao-tmall-summer-summer-summer-beach-cool-festival-fresh-picture-image_1050724.jpg';
  }
  else if(month>8 && month<10){
    url='';
  }
  else if(month>9 && month<3){
    url='';
  }
  else if(month>2 && month<5){
    url='';
  }
  return (
    <div style={{backgroundImage:`url(${url})`}} className='w-full h-32 bg-cover bg-blue-300 flex flex-row justify-center items-center relative'>
        <div className='w-full h-full flex flex-row justify-center items-center'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSng5iGr1TB2UmRnLdjzCBVlhVuJ2nPzi1y9A&usqp=CAU' alt='Weather icon' className='img w-10 h-auto m-2 border-2 border-cyan-200 rounded-full sm:w-16'/>
         <div className='m-4 text-2xl text-blue-700 sm:text-5xl'>Weather and Whimsy</div>
        </div>
         <Link to='/News' style={{backgroundImage:'url(https://cdn-icons-png.freepik.com/256/2965/2965879.png?semt=ais_hybrid)'}} className='bg-cover bg-opacity-20 backdrop-blur-lg w-24 h-28 flex flex-row justify-center items-center rounded-2xl p-4 border-2 border-white right-0'>
          <div className='text-3xl text-white' >
        
          </div>
        </Link>
    </div>
  )
}

export default Header