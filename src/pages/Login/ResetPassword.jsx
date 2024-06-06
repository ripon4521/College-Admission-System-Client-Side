import  { useState } from "react";
// import firebase from "firebase/app";
import { app } from "../../firebase/firebase.config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer,toast } from "react-toastify";
// import "firebase/auth";
// import {  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const auth = getAuth(app);
  const handleResetPassword = async (e) => {

    e.preventDefault();
    try {
      await sendPasswordResetEmail( auth,email);
      setSuccessMessage("Password reset email sent. Check your inbox!");
    toast.success("Password reset email sent. Check your inbox!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div>
        <ToastContainer/>
        <section>
  <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
      <div className="flex flex-col">
        <div>
          <h2 className="text-4xl text-black">Reset password</h2>
        </div>
      </div>
      <form onSubmit={handleResetPassword}>
        <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect"/>
        <div className="mt-4 space-y-6">
          <div className="col-span-full">
            <label className="block mb-3 text-sm font-medium text-gray-600"> Your Email   </label>
            <input  type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
          </div>
        

          <div className="col-span-full">
            <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
          </div>
        </div>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} 
    </div>
  </div>
</section>

      {/* <h2>Password Reset</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} */}
    </div>
  );
};

export default ResetPassword;
