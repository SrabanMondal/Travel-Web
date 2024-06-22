import React from 'react'
import Nav from './Components/Nav'
import TeamMember from './Components/TeamMember'
import Header from './Components/Header'
import Mission from './Components/Mission'
import Techno from './Components/Techno'
const Documentation = () => {
  return (
    <div>
        <Nav color='#d8b4fe'/>
        <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-300 to-red-300 text-gray-800">
        <Header/>
      <main className="px-4">
        <Mission/>
        <section className="text-center my-10 w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">-:Our Team:-</h2>
          <div className="mt-8 flex justify-center items-center flex-wrap gap-8 w-11/12 h-fit">
            {['Aditya Ghosh', 'Aditya Ghosh', 'Aditya Ghosh', 'Aditya Ghosh', 'Aditya Ghosh'].map((name, index) => (
              <TeamMember key={index} name={name} />
            ))}
          </div>
        </section>
        <Techno/>
        
      </main>
    </div>
    </div>
  )
}

export default Documentation