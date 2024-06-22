import React from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header3'
import LocationResults from './Components/LocationResults'
import PopularDestinations from './Components/PopularDestination'
const Places = () => {
  return (
    <div>
        <Nav color='white'/>
        <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-gray-800">
      <Header />
      <LocationResults />
      <PopularDestinations />
    </div>
    </div>
  )
}

export default Places