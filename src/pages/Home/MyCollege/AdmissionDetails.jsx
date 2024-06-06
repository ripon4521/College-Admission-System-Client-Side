
// import { useLoaderData } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
// import { MdEventAvailable } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import Testimonials from "../Testimonials/Testimonials";
import { useState } from "react";





const AdmissionDetails = ({ item } ) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div className="container mx-auto my-10">

      <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:w-3/5">
            <div className="flex items-center gap-10">
            <h2 className=" text-3xl font-bold md:text-5xl font-sans drop-shadow-md">{item.college.name}</h2>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="font-sans font-semibold px-2 py-2 bg-lime-500 rounded-md">Give a Feedback</button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <Testimonials item={item} />
  </div>
</dialog>
            </div>
           
            <div className='flex flex-col md:flex-row gap-5 '>
            <p className="text-sm sm:text-xl font-semibold  drop-shadow-md " >
            Admision Process : <span className='text-base'> {item?.college.admission_process.process}</span>
            <div className='flex items-center flex-wrap gap-10'>
         <div>
         <p className='font-sans text-base mt-10'>Requirements</p>
            <hr className='w-28'/>
            {
                item?.college.admission_process.requirements.map((x, i) =>  <span key={i} className="text-[14px] my-1 flex items-center gap-2"><FaLocationArrow className='text-lime-500'/>{x}</span>)
            }
         </div>

       <div>
       <p className="text-sm sm:text-xl font-semibold  drop-shadow-md " >
    
    <p className='font-sans text-base -mt-5 '>Deadlines</p>
    <hr className='w-28'/>
    <span  className="text-[14px] my-1 flex items-center gap-2"><MdOutlineDateRange className='text-lime-500'/><span className='text-gray-500'>Early Decision</span>: {item?.college.admission_process.deadlines.early_decision}</span>

    <span  className="text-[14px] my-1 flex items-center gap-2"><MdOutlineDateRange className='text-lime-500'/><span className='text-gray-500'>Regular Decision</span>: {item?.college.admission_process.deadlines.regular_decision}</span>
    <span  className="text-[14px] my-1 flex items-center gap-2"><MdOutlineDateRange className='text-lime-500'/><span className='text-gray-500'>Financial Aid</span>: {item?.college.admission_process.deadlines.financial_aid}</span>
   
    </p>
       </div>
            </div>
           
            </p>
            
        

            </div>
           
            <h1 className='text-3xl font-ranacho drop-shadow-md'>Our Evnets Festivels </h1>
    
            <div className='flex gap-5 flex-wrap '>
                {
                    item?.college.events.map((x, i) =>     <div key={i}
                    className="div h-[13em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
                  >
                    <div
                      className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"
                    ></div>
                  
                    <button
                      className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
                    >
                      <span
                        className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0 drop-shadow-md"
                        > {x.date} </span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  
                    <h1
                      className="z-20 drop-shadow-md font-sans font-bold font-Poppin group-hover:text-white duration-500 text-xl"
                    >
                      {x.name}
                    
                    </h1>
                    <p className='text-gray-500 group-hover:text-white drop-shadow-md'>  {x.description}</p>
               
                  </div>
                  )
                }
          

         
         
          
            </div>


            {/* Divider */} <div className="mt-8 h-px w-full bg-black"></div>
            {/* Testimonials */}
            <h1 className='text-3xl font-sans font-semibold'>Research Works</h1>
            <div className="grid gap-8 md:grid-cols-2 md:gap-4 -mt-8">
                {
                    item?.college.research_works.map((x, i) => <div key={i}
                    className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
                  >
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-between w-full">
                        {
                            x.authors.map((y,i) =>  <p key={i} className="text-base drop-shadow-md font-semibold">{y}</p> )
                        }
                      
                    
                      </div>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <h3 className="text-xl font-bold">{x.title}</h3>
                  
                   
                    </div>
                  
                    <div className="text-sm">
                    {x.description}
                    </div>
                    <div>
                        <p className='flex items-center gap-1'><MdOutlineDateRange className='text-lime-500'/>{x.published_date}</p>
                        <p className='flex items-center gap-1'><TbListDetails className='text-lime-500'/>Journal: {x.journal}</p>
                    </div>

  
                  </div>
                  )
                }


<div className=''>
<h1 className='text-3xl font-sans font-semibold mb-5'>Sports Categories</h1>
<div className='flex flex-wrap items-center gap-5'>
{
    item?.college.sports_categories.map((x, i) =>   <button key={i} title="Save " className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-2 py-2">

    <span className="text-sm text-lime-400 font-bold pr-1">{x}</span>
  </button> )
}
        
    </div>              
                    </div>

            </div>
          </div>
          {/* Image */}
          <div className="w-full rounded-md  max-[991px] lg:w-2/5"><img className=' rounded-md' src={item?.college?.images} alt="" /></div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AdmissionDetails;
