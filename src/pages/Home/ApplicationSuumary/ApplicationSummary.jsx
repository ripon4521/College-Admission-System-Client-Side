import { AiOutlineFileDone } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";




const ApplicationSummary = () => {
    return (
        <div className="py-8 bg-gradient-to-r from-[#F8E5CC] to-[#E3E1EE]">
            <div className="flex justify-center md:gap-36 flex-col md:flex-row gap-5 ">
            <div className="flex justify-center items-center ">
                <span className="text-6xl rounded-md font-bold"><AiOutlineFileDone></AiOutlineFileDone></span>
                <div>
                    <p className="text-xl font-bold font-sans">5,00,000+</p>
                    <p className="text-base font-sans">Applications filled</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-1 ">
                <span className="text-6xl rounded-md font-bold"><FaGraduationCap></FaGraduationCap></span>
                <div>
                    <p className="text-xl font-bold font-sans">1,00,000+</p>
                    <p className="text-base font-sans">Admissions done</p>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <span className="text-6xl rounded-md font-bold"><TbMessages></TbMessages></span>
                <div>
                    <p className="text-xl font-bold font-sans">1,000+</p>
                    <p className="text-base font-sans">Expert Counsellors</p>
                </div>
            </div>

            </div>
         
        </div>
    );
};

export default ApplicationSummary;