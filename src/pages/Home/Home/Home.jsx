import ApplicationSummary from "../ApplicationSuumary/ApplicationSummary";
import Faq from "../Faq/Faq";
import FeaturedCollege from "../FeaturedCollege/FeaturedCollege";
import FindTopCollege from "../FindTopCollege/FindTopCollege";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import HowItWorks from "../HowItWorks/HowItWorks";
import Navbar from "../Navbar/Navabr";
import Testimonials from "../Testimonials/Testimonials";
import TestimonialsSlider from "../TestinmonialsSlider/TestimonialsSlider";
import Banner from "./Banner/Banner";


const Home = ({ searchQuery } ) => {
    return (
        <div>
   <div className="bg-[#050038]">
 <div   className="max-w-7xl mx-auto ">

       <Banner/>
 </div>
   </div>
   <ApplicationSummary/>
   <FeaturedCollege searchQuery ={ searchQuery }  />
   <Gallery/>
   <HowItWorks/>
<TestimonialsSlider/>
   <Faq/>
   <FindTopCollege/>
  
        </div>
    );
};

export default Home;