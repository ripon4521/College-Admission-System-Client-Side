import { useState } from "react";


const Testimonials = () => {


    const [formData, setFormData] = useState({
        collegeName: '',
        feedback: '',
        rating: 0,
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
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData == '') {
            return <p>Please fill the all input fileds</p>
        }
        console.log(formData)
        // Here you can add the logic to send the data to your backend or perform other actions.
      }    
    return (
        <div>
            {/* Section Testimonial */}
<section className="bg-[#f2f2f7]">
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Title */}
    <h2 className="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl font-sans drop-shadow-md">What our college about are saying</h2>
    {/* Testimonial List */}
    <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
      <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li>
      <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li>
      <li className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" className="mr-1.5 w-4" />
        </div>
        <p className="text-[#647084]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</p>
        <div className="flex">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png" alt="" className="mr-4 h-16 w-16" />
          <div className="flex flex-col">
            <h6 className="text-base font-bold">Laila Bahar</h6>
            <p className="text-sm text-[#636262]">Designer</p>
          </div>
        </div>
      </li>
    </ul>
    {/* Link */}

    <div className="flex flex-col items-center justify-center light">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 font-sans">
      Write a feedback about specific College.
    </h2>

    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="collegeName"
        value={formData.collegeName}
        onChange={handleChange}
        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Enter College Name"
      />
      <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
      <a href="#" className="text-sm text-gray-600 hover:underline"
        >Privacy Policy</a >
    </div>
  </div>
</div>

    <a href="#" className="flex justify-center font-bold text-black">Check all reviews</a>
  </div>
</section>

        </div>
    );
};

export default Testimonials;