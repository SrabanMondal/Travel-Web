import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './DayContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const Cook = () => {
  const {info} =  useContext(MyContext);
  const [cook, setcook] = useState(null);
  let food;
  let recipes;
  useEffect(() => {
    if(info.temperature && !cook){
      console.log(info.temperature);
    const fetchdata = async ()=>{
      if(info.weather==='Rain'||info.weather==='Drizzle'||info.weather==='Thunderstorm'){
        food = 'pasta';
      }
      else if(info.temperature<15)
        {
          food='soup';
        }
      else if(info.temperature > 25)
        {
          food = 'smoothie';
        }
      else
      {
        console.log(info.temperature);
        food='sandwitch';
      }
      try{
        const api = 'c7afd246b901671302392a301c1ae58d';
      const response = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=bdea33e8&app_key=${api}`);
      recipes = await response.data;
      console.log(response.data);
      console.log(recipes.hits[0].recipe);
      console.log(recipes.hits[0].recipe.image);
      setcook(recipes.hits);
    }
    catch(err){
      console.log(err.message);
    }
  };
  fetchdata();
  }
  }, [info.temperature])
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <div className='w-full bg-blue-300 flex flex-col md:w-9/12 h-full'>
      <div className='h-1/6 w-full text-4xl p-2 bg-blue-400'>Recipes based on weather</div>
        <div className='w-full h-auto'>
      <Slider  {...settings}>
        { cook &&
          cook.map((cook,index) => (
          <a key={index} href={cook.recipe.url}><img style={{objectFit:'cover', objectPosition:'center'}} src={cook.recipe.image} alt={cook.recipe.label} className={'h-52 border-2 border-black rounded'}/>
          <p className='p-2 bg-pink-300 h-16 md:h-10 hover:bg-pink-500'>{cook.recipe.label}</p>
          </a>
        ))
        }
        
      </Slider>
        </div>
    </div>
  )
}

export default Cook