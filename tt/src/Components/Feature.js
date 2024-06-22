import React from 'react'

const Feature = () => {
  return (
    <div className='w-full h-fit my-6 flex flex-col justify-center items-center gap-6'>
        <div className=' h-10 w-full text-2xl text-center border-b-2 border-black font-bold text-[#636BFB]'>Our Featues:</div>
        <div className='h-fit w-11/12 flex flex-col sm:flex-row gap-3 justify-center items-center'>
            <div className='w-11/12 sm:w-3/12 h-60 rounded-xl bg-[#EBEBF0] flex flex-col justify-center items-center'>
                <div className='w-full h-4/6 flex justify-center items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/9094/9094128.png' alt='icon' className='h-4/6'/>
                </div>
                <div className='h-2/6 w-full text-3xl font-bold text-center'>Secure</div>
            </div>
            <div className='w-11/12 sm:w-3/12 h-60 rounded-xl bg-[#EBEBF0] flex flex-col justify-center items-center'>
                <div className='w-full h-4/6 flex justify-center items-center'>
                    <img src='https://i.pinimg.com/736x/7e/ec/a9/7eeca91aeb70d1f509b66b894d685003.jpg' alt='icon' className='h-4/6 rounded-full'/>
                </div>
                <div className='h-2/6 w-full text-3xl font-bold text-center'>Customizable</div>
            </div>
            <div className='w-11/12 sm:w-3/12 h-60 rounded-xl bg-[#EBEBF0] flex flex-col justify-center items-center'>
                <div className='w-full h-4/6 flex justify-center items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/11747/11747552.png' alt='icon' className='h-4/6'/>
                </div>
                <div className='h-2/6 w-full text-3xl font-bold text-center'>Reliable</div>
            </div>
            <div className='w-11/12 sm:w-3/12 h-60 rounded-xl bg-[#EBEBF0] flex flex-col justify-center items-center'>
                <div className='w-full h-4/6 flex justify-center items-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Eo_circle_purple_fast-forward.svg/1200px-Eo_circle_purple_fast-forward.svg.png' alt='icon' className='h-4/6'/>
                </div>
                <div className='h-2/6 w-full text-3xl font-bold text-center'>Fast</div>
            </div>
        </div>
    </div>
  )
}

export default Feature