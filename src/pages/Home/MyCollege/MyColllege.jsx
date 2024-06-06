import { useContext } from "react";
import useAdmission from "../../../Hooks/useAdmission";
import { AuthContext } from "../../../providers/AuthProviders";
// import CollegeDetails from "../FeaturedCollege/CollegeDetails";
import AdmissionDetails from "./AdmissionDetails";


const MyColllege = () => {
    const [admission] = useAdmission();
    const { user } =useContext(AuthContext);
    const yourAdmission = admission.filter(x => x.userEmail === user?.email);
    // console.log(yourAdmission)
    return (
        <div className="">
            {
                yourAdmission?.map(item =>  <AdmissionDetails key={item._id} item={item}></AdmissionDetails> )
            }


        </div>
    );
};

export default MyColllege;