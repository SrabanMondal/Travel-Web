import React, { useContext,useEffect,useState } from 'react'
import axios from 'axios'
import { MyContext } from './DayContext'
const Climate = (props) => {
    const {info,updateClimate}= useContext(MyContext);
    const [weather,setWeather] = useState(null);
    const [time,settime] = useState(null);
    useEffect(() => {
      if(props.value && !weather){
        const fetchdata = async ()=>{
          try{
            const api='eba21f1c1886ceed47fdfb2f79b5a316';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(props.value)}&appid=${api}&units=metric`)
            setWeather(response.data);
            const weathr= await response.data;
            console.log(weathr);
            //setinfo({...info,temperature:weathr.main.temp,weather:weathr.weather[0].main})
            updateClimate(weathr);
            const currentTime = new Date().getTime() / 1000;
            let day = weathr.sys.sunset>currentTime;
            if(day){

              const date = new Date(weathr.sys.sunset * 1000);
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const seconds = date.getSeconds();
              const formatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
              settime(formatted);
            }
            else{
              const date = new Date(weathr.sys.sunrise * 1000);
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const seconds = date.getSeconds();
              const formatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
              settime(formatted);
            }
          }
          catch(err){
            console.log(err.message);
          }
        };
        fetchdata();
      }
    }, [info.location])
    
  return (
    <div>
        {weather && 
        <div className=' bg-white bg-opacity-10 backdrop-blur-lg my-10 h-full w-fit p-5 border-2 rounded-2xl border-opacity-5'>
        <div className='text-4xl'>Temperature - {weather.main.temp}</div>    
        <div className='text-xl'>{weather.main.temp_max}/{weather.main.temp_min}</div>    
        <div className='text-3xl'>Feels like - {weather.main.feels_like}</div>
        <div className='text-3xl'>Weather - {weather.weather[0].description}</div>
        <div className='text-2xl'>Humidity - {weather.main.humidity}</div>
        <div className='text-xl'>Wind speed - {weather.wind.speed}km/h</div>
        {
          info.isDay ?
        <div className='text-2xl'>Sunset at {time}</div>
        :
        <div className='text-2xl'>Sunrise at {time}</div>
        }
        </div>
        }
    </div>
  )
}

export default Climate