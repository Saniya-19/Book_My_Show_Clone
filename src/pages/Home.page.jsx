import React, { useState } from 'react';

//Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

//Components
import EntertainmentCardComponent from '../Components/Entertainment/EntertainmentCardComponent';
// import Herocarousel from '../Components/HeroCarousel/HeroCarouselComponent';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Components';





const HomePage = () => { 
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premiumMovies, setPremiumMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return(
    <>
    {/* <Herocarousel /> */}
    <div className="container mx-auto,px-4 md:px-12 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 ">The best of Entertainment</h1>
        <EntertainmentCardComponent />
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8">
       
        <PosterSlider
         title="Recommended movies"
         subject="List of recommended movies" 
         posters={recommendedMovies}
         isdark={false}
         />
    </div>

    <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
                <img src="" 
                alt="Rupay"
                className="w-full h-full"
                 />
                 </div>
                 <PosterSlider 
                 title="premiers"
                 subject="Brand new releases every friday"
                 posters={premiumMovies}
                 isdark={true}
               />
            </div>
         </div>
         <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
             <PosterSlider 
                 title="Online Streaming Events"
                 subject="Online Stream Events"
                 posters={onlineStreamEvents}
                 isdark={false}
               />
             </div>
    </> 
  );
};
export default DefaultLayoutHoc(HomePage);