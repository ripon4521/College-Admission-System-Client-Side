import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navabr";
import Footer from "../pages/Home/Footer/Footer";
import { useState } from "react";
import useCollege from "../Hooks/useCollege";


const MainLayout = () => {
    const [ allCollegeData] = useCollege();
    const [searchQuery, setSearchQuery] = useState('');
  
    // const [searchQuery, setSearchQuery] = useState('');
    const [filteredColleges, setFilteredColleges] = useState(allCollegeData);
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchClick = () => {
      const filtered = allCollegeData.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredColleges(filtered);
    };
    return (
        <div  >
       <div className="bg-[#050038]">
    <div className="max-w-7xl mx-auto">
    <Navbar handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick}/>
    </div>
       </div>
            <Outlet  searchQuery={searchQuery}/>
            <div className="container mx-auto">
            <Footer/>
    </div>
 
        </div>
    );
};

export default MainLayout;