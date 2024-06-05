import ApplicationSummary from "../ApplicationSuumary/ApplicationSummary";
import FeaturedCollege from "../FeaturedCollege/FeaturedCollege";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navabr";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
   <div className="bg-[#050038]">
 <div   className="max-w-7xl mx-auto ">
 <Navbar/>
       <Banner/>
 </div>
   </div>
   <ApplicationSummary/>
   <FeaturedCollege/>
       <Footer/>
        </div>
    );
};

export default Home;