import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const HotNews = () => {
    const [news, setnews] = useState(null);
    useEffect(() => {
      if(!news){
      const fetchdata = async ()=>{
        try{
            const apiKey='c29a483cb7354925af54cab78bca75a2';
            const response = await axios.get(`https://newsapi.org/v2/everything?q=ai&apiKey=${apiKey}`);
            setnews(response.data.articles);
            //console.log(response.data);
        }
        catch(err){
            console.log(err.message);
        }
      }
      fetchdata();
    }
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
    <div>
        <div className='w-screen h-fit md:w-full bg-gray-300 gap-4'>
            <p className='text-2xl text-center font-bold bg-slate-400'>Top Headlines</p>
        <Slider {...settings}>
            {
                news &&
                news.map((news,index) => (
                    <a key={index} href={news.url} className='hover:bg-slate-500 w-full flex flex-col'>
                        <div className='h-5/6'>
                            <h1 className=' font-bold text-xl m-1 md:m-3 md:text-2xl'>{news.title} </h1>
                        <img src={news.urlToImage} className='w-3/6 m-1 md:m-3 border-2 border-white'/>
                        <p className='m-1 md:m-3'>{news.description}</p>
                        </div>
                    </a>
                ))

            }
        </Slider>
        </div>
    </div>
  )
}

export default HotNews