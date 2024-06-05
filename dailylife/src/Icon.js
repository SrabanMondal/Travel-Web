import React from 'react'

import Quote from './Quote'
const Icon = () => {
  return (
    <div className='w-full h-96 bg-red-200 flex flex-row justify-evenly md:w-3/12 md:h-full md:flex-col'>
        <Quote/>
       <img src='https://thumbs.dreamstime.com/b/vector-cartoon-man-something-to-say-speech-bubble-above-him-handsome-manager-talking-your-text-character-businessman-161471114.jpg' className='w-auto h-40 md:h-32'/>
    </div>
  )
}

export default Icon