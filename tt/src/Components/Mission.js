import React from 'react'

const Mission = () => {
  return (
    <div className='h-fit w-full flex flex-col items-center justify-center'>
        <div className='w-4/5 h-60 justify-center items-center flex'>
            <img src='https://s3-alpha-sig.figma.com/img/bd24/f2d3/356c2413a3b4579ab0b7cc167fcc90db?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kExuPxZqNCWbyO2aDl1SZnbV-96BJZ8nAnyQu38j~h7RlLznvKGz0N4pNLKUdg-qx758vheBBiLXcju4AiViiGiN52R-whBDCNrU7Gcgmyfm0A~lUuk94T6seI7whHUoGPoJjAhznmmNocGGLXT4FRcDtgh9eQNiJeCzNoEyTSloDFu5gwpB3TU5P2ywZ6VZC1hSL98LGugiaWIhWzYpF3HYOB8Lk4-xIBgrfJFxX5NbduGoWVLai9FjVl-9pW1dcSfSNZOZoG34lZquW~Ki~zX61qpcRE67G5CTwvUobD5k2sXNtGIhw2SgM8dnc-uZb4xQ8sKVjoLiXnsXmkEvCQ__'
            alt="icon" className='h-full'/>
        </div>
        <section className="text-center w-full h-72 sm:h-64 flex justify-center items-center">
        <div className='lg:w-8/12 w-11/12 h-full flex flex-col gap-2  bg-gradient-to-r from-[#6A6A6AA6] via-[#E9BB1DA6] to-[#0B37D3A6] p-5 px-9 rounded-3xl text-white'>
            <h2 className="text-3xl font-bold text-black">Our Mission</h2>
            <p className="sm:text-xl text-base">At TravTally, our mission is to create a universal platform dedicated to simplifying trip planning for travel enthusiasts. We aim to streamline the process by eliminating the need to scour multiple sites for tickets. Instead, we provide a comprehensive search for the best available tickets tailored to your travel plans.</p>
        </div>
        </section>
    </div>
  )
}

export default Mission