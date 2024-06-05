import ApplicationSummary from "../ApplicationSuumary/ApplicationSummary";
import Faq from "../Faq/Faq";
import FeaturedCollege from "../FeaturedCollege/FeaturedCollege";
import FindTopCollege from "../FindTopCollege/FindTopCollege";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import HowItWorks from "../HowItWorks/HowItWorks";
import Navbar from "../Navbar/Navabr";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
   <div className="bg-[#050038]">
 <div   className="max-w-7xl mx-auto ">

       <Banner/>
 </div>
   </div>
   <ApplicationSummary/>
   <FeaturedCollege/>
   <Gallery/>
   <HowItWorks/>
   <Testimonials/>
   <Faq/>
   <FindTopCollege/>
  
        </div>
    );
};

export default Home;