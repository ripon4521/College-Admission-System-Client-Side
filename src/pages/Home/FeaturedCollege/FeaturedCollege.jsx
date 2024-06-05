import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FeaturedCollege = () => {
  const [collegeDetails, setCollegeDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allCollegeData');
        setCollegeDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchCollegeDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center my-10 text-4xl font-sans font-bold drop-shadow-md">
        Featured <span className="text-lime-500">Colleges</span>
      </h1>
      <div className="flex justify-center flex-wrap mt-20 gap-10">
        {
          collegeDetails.map(college => (
            <div key={college._id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={college.images} alt={`${college.name}`} />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {college.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {college.admission_process.process}
                </p>
              </div>
              <div className="p-6 pt-0">
                <NavLink to={`/college-details/${college._id}`} className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  See Details
                </NavLink>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedCollege;
