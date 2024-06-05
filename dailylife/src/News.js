import React from 'react'
import { useEffect,useState } from 'react'
import Reddit from './Reddit';
import Crypto from './Crypto';
import SportsNews from './SportsNews';
import EntertainmentNews from './EntertainmentNews';
import SpaceNews from './SpaceNews';
import HealthNews from './HealthNews';
import EnvironmentNews from './EnvironmentNews';
import HotNews from './HotNews';
const News = () => {
  return (
    <>
    <HotNews/>
    <div className='w-full'>
    <div className='flex flex-col gap-2 w-full h-fit sm:flex-row'>
      <div style={{backgroundImage:'url(https://w0.peakpx.com/wallpaper/83/554/HD-wallpaper-newspaper-knowledge-news-note-paper-politics-times-tribune-thumbnail.jpg)'}} className='w-96 h-auto bg-cover flex flex-col justify-between'>
      <Reddit subreddit="technology" />
      <Crypto />
      </div>
      <div className='w-fit h-fit flex flex-col'>
      <EntertainmentNews/>
      <SportsNews />
      <SpaceNews/>
      </div>
    </div>
    <div className='h-fit w-full bg-transparent flex flex-col justify-around gap-2 md:flex-row'>
      <HealthNews/>
      <EnvironmentNews/>
    </div>
    </div>
      
    </>
  )
}

export default News