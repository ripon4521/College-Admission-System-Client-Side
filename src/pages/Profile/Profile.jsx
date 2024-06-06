import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useUsers from "../../Hooks/useUsers";
import useAdmission from "../../Hooks/useAdmission";
import { axiosPublic } from "../../Hooks/usePublic";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const curentUser = users?.find((data) => data.email === user?.email);
  const [admission] = useAdmission();
  const univewrSity = admission?.find((data) => data.userEmail === user?.email);
  // console.log(curentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const address = e.target.address.value;
      const university = e.target.collegeName.value;

      // Make a PUT request to update the profile data
      await axiosPublic.put(`/update/${curentUser._id}`, {
        name,
        email,
        address,
        university,
      });

      document.getElementById("my_modal_3").close();
      toast.success("Profile updated successfully");
      // Optionally, you can update the local state with the new data if needed
      // Update local state or show a success message
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="flex justify-start my-20 max-w-xl mx-auto">
        <ToastContainer/>
      <div className="group flex flex-col justify-start items-start gap-2 w-96 h-[600px] duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 font-sans drop-shadow-md">
            My Profile
          </h2>
          <div className=" my-5">
            {curentUser?.prolieImg ? (
              <div className="flex items-center gap-5">
                <img
                  className="w-20 rounded-full"
                  src={curentUser?.prolieImg}
                  alt=""
                />
              </div>
            ) : (
              <div className="flex items-center gap-5">
                {" "}
                <img
                  className="w-20 rounded-full"
                  src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717545600&semt=ais_user"
                  alt=""
                />
              </div>
            )}
          </div>
          <label className="form-control w-96">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              readOnly
              type="text"
              defaultValue={curentUser?.name}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <span className="label-text mt-2">Email</span>
            <input
              readOnly
              type="email"
              defaultValue={curentUser?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
            />
            <span className="label-text mt-2">Address</span>
            <input
              readOnly
              type="email"
              defaultValue={curentUser?.address}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
            />
            <span className="label-text mt-2">University</span>
            <input
              readOnly
              type="email"
              defaultValue={curentUser?.university}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
            />
          </label>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6"
        >
          Edit
        </button>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" >open modal</button> */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSubmit} className="">
              <h1 className="text-center mb-2 font-bold drop-shadow-md">
                Edit Your Profile
              </h1>
              <hr />
              <label className="form-control w-96">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>

                <input
                  type="text"
                  name="name"
                  defaultValue={curentUser?.name}
                  placeholder="Type here"
                  className="input input-bordered md:w-full w-60 "
                />
                <span className="label-text mt-2">Email</span>
                <input
                  type="email"
                  name="email"
                  defaultValue={curentUser?.email}
                  placeholder="Type here"
                  className="input input-bordered md:w-full w-60"
                />
                <span className="label-text mt-2">Address</span>
                <input
                  type="text"
                  name="address"
                  defaultValue={curentUser?.address}
                  placeholder="Type here"
                  className="input input-bordered md:w-full w-60"
                />
                <span className="label-text mt-2">University</span>
                <input
                  type="text"
                  name="collegeName"
                  defaultValue={curentUser?.university}
                  placeholder="Type here"
                  className="input input-bordered md:w-full w-60  "
                />
              </label>
              <button className="bg-lime-500 font-sans px-2 py-2 rounded-md my-2 w-20">
                Submit
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Profile;
