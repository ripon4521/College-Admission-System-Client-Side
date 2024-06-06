import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import useAuth from "../../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = ({ handleSearchChange, handleSearchClick }) => {
  const [open, setOpen] = useState(false);
  const { user} = useContext(AuthContext);
//   console.log(user)
const { logout } = useAuth();
const handleLogout =() => {
   logout()
   .then(res => toast.success('Logout Success')).catch(err => toast.error(err))

}

  return (
    <header className={`flex w-full items-center `}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 p-2 md:pl-0 ml-2 md:ml-0">
           <p className="text-3xl font-ranacho drop-shadow-md font-semibold text-white pl-5">College<span className="text-lime-500">Dekho</span></p>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
                
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2  ring-primary focus:ring-2 lg:hidden bg-gray-800 bg-none py-2 px-4 rounded-md mr-14`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-lime-500"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-lime-500"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-lime-500"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg   px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex gap-5  ">

                 <li className="text-lime-500 hover:text-lime-600 font-sans "><NavLink to="/">Home</NavLink></li>
             <li className="text-lime-500 hover:text-lime-600 font-sans"> <NavLink to='/college'>Colleges</NavLink>   </li>
                 <li className="text-lime-500 hover:text-lime-600 font-sans">  <NavLink to='/admission'>Admission</NavLink> </li>
                <li className="text-lime-500 hover:text-lime-600 font-sans"> <NavLink to='/myCollege'> My College</NavLink> </li>

              
                </ul>
              </nav>
            </div>
            <label className="input input-bordered  items-center gap-2 hidden h-10 md:flex">
  <input   onChange={handleSearchChange} type="text" className="grow" placeholder="Search"  />
  <svg onClick={handleSearchClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
{
    user? <div className="dropdown dropdown-end ">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        {
            user?.photoURL ?       <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />:       <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        }
  
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
         {user?.displayName}
          <span className="badge">New</span>
        </a>
      </li>
      <li><Link to="profile">Profile</Link></li>
      <li onClick={handleLogout}><a>Logout</a></li>
    </ul>
  </div>
 :<div className=" flex justify-end pr-28 sm:flex lg:pr-0">
    <Link to= '/login'

      className="px-2 py-3 text-base font-medium text-lime-500"
    >
    Login
    </Link>

    <button title="Save" className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-2 py-1">

<Link to='/signUp' className="text-sm text-lime-400 font-bold pr-1 hidden md:block">Sign Up</Link>
</button>
  </div>
}


          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
