import { useContext, useState } from "react";
import useCollege from "../../Hooks/useCollege";
import axios from "axios";
import { axiosPublic } from "../../Hooks/usePublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Admission = () => {
  const [allCollegeData] = useCollege();
  const { user } = useContext(AuthContext);
  const from = "/myCollege";
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    img: null,
    collegeId: '',
  });

// console.log(selectedCollege)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { img, ...data } = formData;
    if (img) {
      const imageData = new FormData();
      imageData.append("image", img);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=8e5bba079bcdee4c1b82e64022992858`,
          imageData
        );
        data.img = response.data.data.url;
    
      } catch (error) {
        console.error("Image upload failed:", error);
        return;
      }
    }

    // Now you can send 'data' to your server or handle it as needed
    // console.log(data);
    // Reset the form
    setFormData({
      name: "",
      subject: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      address: "",
      img: null,
      collegeId: '',
    });
    const userInfo ={
        userName: user?.displayName,
        userEmail:user?.email,
        name: formData.name,
        subject: formData.subject,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        img: data.img,
        college:selectedCollege,
       
    }
    console.log(userInfo)
    axiosPublic.post('http://localhost:5000/admission', userInfo)
    .then(res=> 
        toast.success("Admission Form Submitted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
        navigate(from, { replace: true })
  
    ).catch(er=> {
        console.log(er)
        toast.error("Admission Form Submission Failed")
    })



  };

  const openModal = (college) => {
    setSelectedCollege(college);
    document.getElementById('my_modal_3').showModal();
  };

  return (
   <div>
    <ToastContainer/>
     <div className="grid gap-10 justify-center max-w-5xl grid-cols-2 mx-auto my-20">
    

    {allCollegeData?.map((college) => (
      <div
        key={college._id}
        className="max-w-xl shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
      >
        <h1 className="text-xl font-bold drop-shadow-md uppercase font-sans">
          {college.name}
        </h1>
        <p className="text-sm w-full drop-shadow-md text-gray-500">
          {college?.admission_process.process}
        </p>

        <button
          onClick={() => openModal(college)}
          className="bg-lime-500 px-2 py-2 font-sans font-semibold text-white rounded-md"
        >
          Apply Now
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-semibold font-ranacho text-center mb-2 text-xl uppercase drop-shadow-md">
              Application Form 
            </h3>
            <hr />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-center gap-2">
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Candidate Name</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Subject Name</span>
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Date of Birth</span>
                      </div>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Candidate Email</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Candidate Phone number</span>
                      </div>
                      <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Address</span>
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required
                      />
                    </label>
                  </div>
                </div>

                <label className="form-control w-full max-w-xs md:ml-16">
                  <div className="label">
                    <span className="label-text">Upload Your Image</span>
                  </div>
                  <input
                    type="file"
                    name="img"
                    onChange={handleChange}
                    className="file-input file-input-bordered w-full max-w-xs"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="my-5 bg-lime-500 px-2 py-2 rounded-md text-white font-semibold w-40 md:ml-36 ml-8"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    ))}
  </div>
   </div>
  );
};

export default Admission;
