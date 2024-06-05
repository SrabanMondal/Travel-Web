import React from 'react'
import Data from './Data'
import Gallery from './Gallery'
const Weather = () => {
  
  return (
    <>
   
     <div className={`flex w-4/5 h-4/5 bg-transparent bg-cover flex-col gap-6 justify-center items-center md:flex-row md:gap-0 md:h-3/5`}>
     <Data/>
     <Gallery/>
     </div>
    
    </>
  )
}
export default Weather