import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navabr";
import Footer from "../pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div  >
       <div className="bg-[#050038]">
    <div className="max-w-7xl mx-auto">
    <Navbar/>
    </div>
       </div>
            <Outlet/>
            <div className="container mx-auto">
            <Footer/>
    </div>
 
        </div>
    );
};

export default MainLayout;