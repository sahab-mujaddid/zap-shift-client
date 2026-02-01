import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerimg1 from '../../assets/banner/banner1.png';
import bannerimg2 from '../../assets/banner/banner2.png';
import bannerimg3 from '../../assets/banner/banner3.png';


const Banner = () =>{
    return(
       <Carousel autoPlay={true}
       infiniteLoop={true}>
                <div>
                    <img src={bannerimg1}/> 
                  <button
  class="absolute bottom-5 left-5 px-5 py-2 bg-green-500 text-white rounded-md cursor-pointer"
>
  Track Your Parcel
</button>


                </div>
                <div>
                    <img src={bannerimg2}/>  
       <button
  class="absolute bottom-5 left-5 px-5 py-2 bg-green-500 text-white rounded-md cursor-pointer"
>
  Track Your Parcel
</button>

   
                </div>
                <div>
                    <img src={bannerimg3} />   
                  <button
  class="absolute bottom-5 left-5 px-5 py-2 bg-green-500 text-white rounded-md cursor-pointer"
>
  Track Your Parcel
</button>

        
                </div>
            </Carousel>
    );
};

export default Banner;