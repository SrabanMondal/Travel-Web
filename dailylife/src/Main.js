import React, { useContext } from 'react'
import Weather from './Weather'
import { MyContext } from './DayContext'
const Main = () => {
  const {info} = useContext(MyContext);
  let url;
  if(info.isDay){
    if(info.weather==='Clear'){
      url='https://media.istockphoto.com/id/1430537932/photo/blue-sky-with-white-clouds.webp?b=1&s=170667a&w=0&k=20&c=h9jXcgHg0keOp2OnI-hkJhsAEAEewKNediKrg-s97a8='
    }
    else if(info.weather==='Rain'){
        url='https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=';
    }
    else if(info.weather==='Haze'){
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqhyUTzGVqX5aV5VGruhsDW8ptEuUfwmxgg&s';
    }
    else if(info.weather==='Thunderstorm'){
        url='https://www.shutterstock.com/image-photo/several-lightning-bolts-strike-down-600nw-1794702010.jpg';
    }
    else if(info.weather==='Drizzle'){
        url='https://static.vecteezy.com/system/resources/previews/033/647/115/large_2x/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg';
    }
    else if(info.weather==='Snow'){
        url='https://images.unsplash.com/photo-1589218112660-81ef972e89e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vdyUyMGRheXxlbnwwfHwwfHx8MA%3D%3D';
    }
    else if(info.weather==='Mist'){
        url='https://static.themarthablog.com/2019/01/DSC_0129-3.jpg';
    }
    else if(info.weather==='Dust'){
        url='https://www.shutterstock.com/image-photo/riyadh-city-dusty-day-saudi-600nw-1089695576.jpg';
    }
    else if(info.weather==='Fog'){
        url='https://images.ctfassets.net/4ivszygz9914/7eOb8lNK2Gm90Vg2Ut7fQZ/3ee6028ad68e7163860a1d5f13a1f3d5/shutterstock_1894831819.png?fm=webp';
    }
    else if(info.weather==='Sand'){
        url='https://www.shutterstock.com/image-photo/riyadh-city-dusty-day-saudi-600nw-1089695576.jpg';
    }
    else if(info.weather==='Tornado'){
        url='https://cms.accuweather.com/wp-content/uploads/2022/03/GettyImages-1131211375-1.jpg?w=632';
    }
    else if(info.weather==='Clouds'){
        url='https://upload.wikimedia.org/wikipedia/commons/1/12/Blue_sky_with_fluffy_clouds_%284598311778%29.jpg';
    }
    else if(info.weather==='Ash'){
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyjuAbzk7M06TILwDFroeZMTC-TIjf9Jj3w&s';
    }
    else if(info.weather==='Squall'){
        url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Thunder_and_wind_during_a_thunderstorm.webm/1200px--Thunder_and_wind_during_a_thunderstorm.webm.jpg';
    }
  }
  else{
    if(info.weather==='Clear'){
      url='https://e0.pxfuel.com/wallpapers/559/910/desktop-wallpaper-clear-night-sky-digital-art.jpg'
    }
    else if(info.weather==='Rain'){
        url='https://png.pngtree.com/background/20230519/original/pngtree-rain-night-on-the-street-wallpapers-picture-image_2652341.jpg';
    }
    else if(info.weather==='Haze'){
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFc5hyIFQpBuFC0RkYpHeriHUofZYMf_7zw&s';
    }
    else if(info.weather==='Thunderstorm'){
        url='https://media.istockphoto.com/id/1318748572/photo/massive-lightning-strike-over-the-brisbane-city-suburbs-lights.jpg?s=612x612&w=0&k=20&c=9Z5tynrQYH3E0fruCBlwIbgsgbdu5_DHxLbSu44o3co=';
    }
    else if(info.weather==='Drizzle'){
        url='https://img.freepik.com/premium-photo/drizzle-rainy-night-light-bokeh-background-wallpaper_1000174-3355.jpg';
    }
    else if(info.weather==='Snow'){
        url='https://as2.ftcdn.net/v2/jpg/01/43/64/97/1000_F_143649783_Zai4KcEvjK9g7tbTqJWyqhQDWuDKePS4.jpg';
    }
    else if(info.weather==='Mist'){
        url='https://burst.shopifycdn.com/photos/foggy-city-night.jpg?exif=0&iptc=0';
    }
    else if(info.weather==='Dust'){
        url='https://aniportalimages.s3.amazonaws.com/media/details/Captufgdfgdfedf.jpg';
    }
    else if(info.weather==='Fog'){
        url='https://images.ctfassets.net/4ivszygz9914/7eOb8lNK2Gm90Vg2Ut7fQZ/3ee6028ad68e7163860a1d5f13a1f3d5/shutterstock_1894831819.png?fm=webp';
    }
    else if(info.weather==='Sand'){
        url='https://aniportalimages.s3.amazonaws.com/media/details/Captufgdfgdfedf.jpg';
    }
    else if(info.weather==='Tornado'){
        url='https://i.abcnewsfe.com/a/bbd00d3f-5c9b-4189-b5b0-eda1c98e71e3/tornado-1-ht-ps-230512_1683896754022_hpMain_16x9t.jpg?w=992';
    }
    else if(info.weather==='Clouds'){
        url='https://media.istockphoto.com/id/603174568/photo/the-indigo-blue-sky-over-the-city.jpg?s=612x612&w=0&k=20&c=p6hE6TyDl6hy6Wba3HkzBAuQRArsyOnIUSESaoLpe5g=';
    }
    else if(info.weather==='Ash'){
        url='https://episcopalnewsservice.org/wp-content/uploads/2023/02/ens_022223_winterstorm.jpg';
    }
    else if(info.weather==='Squall'){
        url='https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/05/05/Photos/Processed/storm-kCaF--621x414@LiveMint.jpg';
    }
  }
  return (
    <div style={{backgroundImage:`url(${url})`}} className={`w-full h-150 bg-cover flex justify-center items-center md:h-screen`}>
        <Weather/>
    </div>
  )
}
export default Main
