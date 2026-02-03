import React from "react";
import Banner from "../../Banner/Banner";
import { CiDeliveryTruck } from "react-icons/ci";
import serviceimg from '../../../assets/service.png';
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
const reviewsPromise= fetch('/reviews.json').then(res => res.json());

const Home = () =>{
    return(
      <div>
        <Banner></Banner>
         <Brands></Brands>
         <Reviews reviewsPromise={reviewsPromise}></Reviews>

        <div>
           <h1 className="font-bold text-3xl">How it works</h1>

           <div className="flex gap-2 m-6">
            <div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
      <CiDeliveryTruck size={50} />
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <CiDeliveryTruck size={50} />
    <h2 className="card-title">Cash On Delivery</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>


<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <CiDeliveryTruck size={50} />
    <h2 className="card-title">Delivery Hub</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>


<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <CiDeliveryTruck size={50} />
    <h2 className="card-title">Bookin SME & Corporate</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
           </div>
           <div className="p-6 m-6 bg-[#03373D] ">
            <h1 className="text-center text-white font-bold text-3xl">Our Services</h1>
            <p className="text-center text-white mb-5">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <div className="grid grid-cols-3 gap-4 ">

<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <img src={serviceimg} className="mx-auto w-12 h-12" alt="service" />
    <h2 className="card-title">Express  & Standard Delivery</h2>
    <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>

<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
   <img src={serviceimg} className="mx-auto w-12 h-12" alt="service" />
    <h2 className="card-title">Nationwide Delivery</h2>
    <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card card-dash bg-base-100 w-96 ">
  <div className="card-body ">
<img src={serviceimg} className="mx-auto w-12 h-12 " alt="service" />
    <h2 className="card-title">Fulfillment Solution</h2>
    <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
  <img src={serviceimg} className="mx-auto w-12 h-12" alt="service" />
    <h2 className="card-title">Bookin SME & Corporate</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
   <img src={serviceimg} className="mx-auto w-12 h-12" alt="service" />
    <h2 className="card-title">Bookin SME & Corporate</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
   <img src={serviceimg} className="mx-auto w-12 h-12" alt="service" />
    <h2 className="card-title">Bookin SME & Corporate</h2>
    <p>From personal packages to business shipments - we deliver on time ,every time</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
            </div>
           </div>
        </div>
      </div>
    );
};

export default Home;