import React from 'react'
import Nav from './Components/Nav'
import Header2 from './Components/Header2'
import FareEstimator from './Components/FareEstimater'
import MapSection from './Components/MapSelection'
import PopularDestinations from './Components/PopularDestination'
const OwnPage = () => {
  return (
    <div>
        <Nav color='#F0E5FD'/>
        <div className="h-fit w-full bg-gradient-to-b from-[#F0E5FD] via-pink-300 to-red-300 text-gray-800">
          <Header2 />
          <FareEstimator />
          <MapSection />
          <PopularDestinations />
        </div>
    </div>
  )
}

export default OwnPage