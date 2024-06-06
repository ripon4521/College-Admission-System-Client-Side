import { useContext, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCollege from "../../../Hooks/useCollege";
import { axiosPublic } from "../../../Hooks/usePublic";
import { AuthContext } from "../../../providers/AuthProviders";


const Testimonials = ( { item, closeModal }) => {
        const [ allCollegeData] = useCollege();
        const { user } = useContext(AuthContext);
        // console.log(allCollegeData)

        const [formData, setFormData] = useState({
       
            feedback: '',
            rating: 0,
            collegeName: '', // Added state for select input
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
        
          const handleRating = (rate) => {
            setFormData({
              ...formData,
              rating: rate,
              collegeName: item?.college?.name,
              useEmail:user?.email,
              userName:user?.displayName,
              userPhoto:user?.photoURL

            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            axiosPublic.post('/testimonials', formData)
            .then(res=> closeModal(), toast.success("Your feedback successfully Submited")).catch(err => console.log(err))
          
         
          };   
    return (
        <div>
            <ToastContainer />
            {/* Section Testimonial */}
<section className="bg-[#f2f2f7]">
  {/* Container */}
  <div className="mx-auto max-w-7xl px-5 ">
    {/* Title */}
    <h2 className="mb-8 text-center text-2xl font-bold md:mb-14 md:text-3xl font-sans drop-shadow-md">What Your college about are saying</h2>
    {/* Testimonial List */}
   
    {/* Link */}

    <div className="flex flex-col items-center justify-center light">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 font-sans">
      Write a feedback about specific College.
    </h2>

    <form className="flex flex-col" onSubmit={handleSubmit}>
   

      <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        className="bg-gray-100 mt-3 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Enter Your Feedback here"
      />
      <div className="rating flex items-center">
        <h1 className="text-xl mr-2 font-sans">Rating:</h1>
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name="rating"
            className={`mask mask-star-2 ${formData.rating >= star ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
   

      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </form>

    <div className="flex justify-center mt-4">
      {/* <a href="#" className="text-sm text-gray-600 hover:underline"
        >Privacy Policy</a > */}
    </div>
  </div>
</div>


  </div>
</section>

        </div>
    );
};

export default Testimonials;