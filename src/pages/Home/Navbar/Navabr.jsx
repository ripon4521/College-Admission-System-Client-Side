import  { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center `}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 p-2 md:pl-0 ml-2 md:ml-0">
           <p className="text-3xl font-ranacho drop-shadow-md font-semibold text-white">College<span className="text-lime-500">Dekho</span></p>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2  ring-primary focus:ring-2 lg:hidden bg-gray-800 bg-none py-2 px-4 rounded-md `}
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
                <ul className="block lg:flex gap-5 ">

                 <li className="text-lime-500 hover:text-lime-600 font-sans "><NavLink to="/">Home</NavLink></li>
             <li className="text-lime-500 hover:text-lime-600 font-sans">    Colleges</li>
                 <li className="text-lime-500 hover:text-lime-600 font-sans"> Admission</li>
                <li className="text-lime-500 hover:text-lime-600 font-sans">  My College</li>

              
                </ul>
              </nav>
            </div>
            <label className="input input-bordered  items-center gap-2 hidden h-10 md:flex">
  <input type="text" className="grow" placeholder="Search"  />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-lime-500"
              >
              Login
              </a>

              <button title="Save" className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 px-2 py-1">
  <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span className="text-sm text-lime-400 font-bold pr-1">Sign Up</span>
</button>
            </div>
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
