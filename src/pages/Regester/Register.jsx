import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { axiosPublic } from "../../Hooks/usePublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { googleLogin, signInWithFacebook, createUser, updateuserProfile } =
    useAuth();

  //   const location = useLocation();
  const from = "/";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const password = formData.password;
    const email = formData.email;
    console.log(email, password);

    const userInfo = {
      name: formData.name,
      email: email,
      prolieImg: "",
      address:'',
      university : ''
    };
    createUser(email, password)
      .then((res) => {
        console.log(res);
        axiosPublic
          .post("/users", userInfo)
          .then(
            (res) => updateuserProfile(formData.name),
            toast.success("Successfully logged in Email and Password"),
            navigate(from, { replace: true })
          )
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => console.log(err));
  };

  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          prolieImg: user.photoURL,
          address:'',
          university : ''
        };
        axiosPublic
          .post("/users", userInfo)
          .then(
            (res) => toast.success("Successfully logged in with Facebook"),
            navigate(from, { replace: true })
          )
          .catch((err) => toast.error(err.message));
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          prolieImg: user.photoURL,
          address:'',
          university : ''
        };
        axiosPublic
          .post("/users", userInfo)
          .then(
            (res) => toast.success("Successfully logged in with Google"),
            navigate(from, { replace: true })
            // window.location.reload(true)
          )

          .catch((err) => toast.error(err.message));
        // console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-96 mx-auto shadow-md my-5">
      <ToastContainer />
      <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0">
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
            <h5 className="text-xl font-sans uppercase font-semibold drop-shadow-md">
              Register with
            </h5>
          </div>
          <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
            <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
              <a
                className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                href="#"
              >
                <svg
                  onClick={handleFacebookLogin}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 64 64"
                  height="32px"
                  width="24px"
                >
                  <g
                    fillRule="evenodd"
                    fill="none"
                    strokeWidth="1"
                    stroke="none"
                  >
                    <g
                      fillRule="nonzero"
                      transform="translate(3.000000, 3.000000)"
                    >
                      <circle
                        r="29.4882047"
                        cy="29.4927506"
                        cx="29.5091719"
                        fill="#3C5A9A"
                      ></circle>
                      <path
                        fill="#FFFFFF"
                        d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
              <a
                onClick={handleGoogleLogin}
                className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 64 64"
                  height="32px"
                  width="24px"
                >
                  <g
                    fillRule="evenodd"
                    fill="none"
                    strokeWidth="1"
                    stroke="none"
                  >
                    <g
                      fillRule="nonzero"
                      transform="translate(3.000000, 2.000000)"
                    >
                      <path
                        fill="#4285F4"
                        d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
              <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">
                or
              </p>
            </div>
          </div>
          <div className="flex-auto p-6">
            <form role="form text-left" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  aria-describedby="name-addon"
                  aria-label="Name"
                  placeholder="Name"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="email-addon"
                  aria-label="Email"
                  placeholder="Email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  aria-describedby="password-addon"
                  aria-label="Password"
                  placeholder="Password"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="min-h-6 pl-7 mb-0.5 block">
                <input
                  checked={formData.terms}
                  name="terms"
                  type="checkbox"
                  className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                  id="terms"
                  onChange={handleChange}
                />
                <label
                  className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                  htmlFor="terms"
                >
                  I agree to the{" "}
                  <a className="font-bold text-slate-700" href="#">
                    Terms and Conditions
                  </a>
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 inline ml-1 fill-current text-green-500"
                  >
                    <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
                  </svg>
                </label>
              </div>

              <div className="text-center">
                <button
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
              <p className="mt-4 mb-0 leading-normal text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-slate-700"
                  href="../pages/sign-in.html"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
