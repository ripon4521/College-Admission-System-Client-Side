import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'
import useFeedback from "../../../Hooks/useFeedback";
import ReactStars from "react-rating-stars-component";


const TestimonialsSlider = () => {
    const [feedback] = useFeedback()
    // console.log(feedback);
    // const [review,setReview]= useState([])
    // useEffect(()=>{
    //     fetch('review.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setReview(data)
    //         // console.log(data);
    //     })
    // },[])
    return (
        <section className="my-20 max-w-6xl mx-auto">
           

         <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            feedback.map(item=>   <SwiperSlide key={item._id}
            
            >

<div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded-2xl border border-solid border-[#636262] bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
        <div className="mb-4 flex flex-col items-center">
          <h6 className="text-base font-semibold">{item?.userName}</h6>
          {/* <p className="text-sm text-[#636262]">Designer</p> */}
        </div>
        <p className="mb-4 text-[#636262]">{item.feedback}</p>
        <div className="flex">
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
        </div>
        <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] mt-7 flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_3px]">
          <img src={item?.userPhoto} alt="" className="inline-block h-full w-full rounded-full" />
        </div>
      </div>

                
                {/* <div className="w-[50%] mx-auto">
                <p className="flex justify-center my-10"> 
                <ReactStars
    count={item.rating}

    size={24}
    activeColor="#ffd700"
  />,
                </p>


                    <img className="mx-auto my-10 rounded-md" src={item.userPhoto} alt="" />

                   
                    <p className="text-center font-sans">{item.feedback}</p>
                    <h2 className="text-orange-400  text-center text-2xl font-inter">{item.userName}</h2>
                </div> */}
            </SwiperSlide>)
        }
        
      </Swiper>
         </div>
          
        </section>
    );
};

export default TestimonialsSlider;


// <section className="relative">
//   <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
//     {/* Container */}
//     <div className="mx-auto w-full max-w-3xl">
//       {/* Component */}
//       <div className="text-center">
//         <h2 className="text-3xl font-semibold md:text-5xl">What<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')] bg-contain bg-center bg-no-repeat px-4 text-white"">Our Clients</span>Are Saying</h2>
//         <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
//           <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
//         </div>
//       </div>
//     </div>
//     <div className="mb-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-8 lg:mb-16">
   
//       <div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded-2xl border border-solid border-[#636262] bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
//         <div className="mb-4 flex flex-col items-center">
//           <h6 className="text-base font-semibold">Harry Peter</h6>
//           <p className="text-sm text-[#636262]">Designer</p>
//         </div>
//         <p className="mb-4 text-[#636262]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
//         <div className="flex">
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//         </div>
//         <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_3px]">
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905435069fb009d43abbb1_Ellipse-2.jpg" alt="" className="inline-block h-full w-full rounded-full" />
//         </div>
//       </div>
//       <div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded-2xl border border-solid border-[#636262] bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
//         <div className="mb-4 flex flex-col items-center">
//           <h6 className="text-base font-semibold">Harry Peter</h6>
//           <p className="text-sm text-[#636262]">Designer</p>
//         </div>
//         <p className="mb-4 text-[#636262]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
//         <div className="flex">
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
//         </div>
//         <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_3px]">
//           <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390543797156ee437ef0425_Ellipse-1.jpg" alt="" className="inline-block h-full w-full rounded-full" />
//         </div>
//       </div>
//     </div>
    
//     <div className="flex flex-col items-center justify-center">
//       <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get Started</a>
//     </div>
//   </div>
//   <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg" alt="" className="absolute bottom-[auto] left-[auto] right-[0%] top-[0%] -z-10 inline-block max-[767px]:hidden" />
// </section>