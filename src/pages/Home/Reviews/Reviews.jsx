import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import { EffectCoverflow, Pagination } from "swiper/modules";
const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    return (
      <div className="my-24">
        <div className="text-center">
          <h3 className="text-3xl text-center font-bold">Review</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, fuga? Exercitationem tempore consectetur nemo consequuntur, hic fugit temporibus eius tenetur distinctio ut libero blanditiis? Voluptatibus minus repudiandae voluptate asperiores iure?</p>
        </div>
         <>
      <Swiper   
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          reviews.map(review => <SwiperSlide key={review.id}>
        <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
      
       
      </Swiper>
    </>
      </div>
    );
};

export default Reviews;