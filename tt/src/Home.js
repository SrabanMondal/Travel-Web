import React from 'react'
import Nav from './Components/Nav'
import Head from './Components/Head'
import Work from './Components/Work'
import Service from './Components/Service'
import Feature from './Components/Feature'
const Home = () => {
  return (
    <div>
        <Nav color='white'/>
        <Head/>
        <Work/>
        <Service/>
        <Feature/>
    </div>
  )
}

export default Home