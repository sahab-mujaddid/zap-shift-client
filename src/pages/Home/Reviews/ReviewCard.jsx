import React from "react";
const ReviewCard = ({review}) => {
    const{userName, review: testimonial,user_photoURL} =review;
    return (
       <div>
         <div className="card bg-base-100 shadow-md border border-base-300 max-w-md mx-auto p-6 rounded-box">
  <div className="text-4xl text-primary flex justify-start mb-4">
    <span className="font-bold leading-none">“</span>
  </div>
  <div className="card-body p-0 text-left">
    <p className="text-base-content text-[17px] leading-relaxed">
     {testimonial}
    </p>
    <div className="divider my-4" />
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary" />
      <img src={user_photoURL} alt="" />
      <div>
        <h2 className="font-semibold text-base-content">{userName}</h2>
        <p className="text-sm text-base-content/70">Senior Product Designer</p>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default ReviewCard;