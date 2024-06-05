import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './DayContext'
import axios from 'axios';
const Gallery = () => {
  const {info} = useContext(MyContext);
  const [image, setimage] = useState(null)
  const [ind, setindex] = useState(0);
  useEffect(() => {
    if(info.location && !image){
    const fetchdata = async()=>{
      const api='-sWjY2V1q5EOVKxmqB5eRO58pyiNAEVctLABmrfJQQE';
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(info.location)}&client_id=${api}`);
      const data = await response.data;
      console.log(info.location)
      setimage(data.results);
      console.log(data.results);
    };
    fetchdata();
  }
  }, [info.location]);
  return (
    <div className='w-full h-full md:w-10/12 md:h-5/6 md:m-4 flex justify-center items-center' >
        { image && (
        <div className='w-full h-full' onClick={()=>{setindex((ind+1)%10)}}>
          {
            image.filter((image,index)=>index===ind).map(image =>(
              //<img key={image.id} src={image.urls.regular} alt={image.description} className={'object-contain h-3/6 w-auto md:h-full md:w-full'}/>
              <div key={image.id} style={{backgroundImage:`url(${image.urls.regular})`}} className='h-full w-full bg-cover bg-center flex flex-row items-end justify-end'>
                <div className='text-xl bg-green-300 p-3 rounded border-2 border-green-500 flex flex-row gap-2'>
                  <img src='https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png' alt='icon' className='w-7' />
                <p>{info.location}</p>
                </div>
                </div>
            ))
          }
        </div>
      )}
    </div>
  )
}

export default Gallery