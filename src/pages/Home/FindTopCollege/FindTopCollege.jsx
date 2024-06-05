import { AiOutlineFileDone } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";




const FindTopCollege = () => {
    return (
        <div className="py-8 bg-gradient-to-r from-[#F8E5CC] to-[#E3E1EE]">
           <div className="flex justify-center flex-col md:gap-36 md:flex-row items-center">
        <div>
        <p className="text-xl font-semibold font-sans px-2 text-lime-500 drop-shadow-md">FIND TOP COLLEGES OF YOUR CHOICE AT ONE PLACE</p>
            <p className="my-2 font-sans drop-shadow-md px-2">1 single form and get access to 2500+ colleges across India. CAF saves your time, money and makes <br /> the college application process easier for you to apply to numerous colleges using one window.</p>
        </div>
        <div>
            <button className="bg-lime-500 text-white px-3 py-2 rounded-md">Apply Now</button>
        </div>
           </div>
         
        </div>
    );
};

export default FindTopCollege;