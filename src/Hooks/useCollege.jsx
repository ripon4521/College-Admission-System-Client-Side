// import { useQuery } from "@tanstack/react-query";

// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";

import { useQuery } from "react-query";
import { axiosPublic } from "./usePublic";



const useCollege = () => {
//  transtack query diye load kornbo

// const {user} = useContext(AuthContext);


    const { refetch , data:allCollegeData = []}=useQuery({
        queryKey:['allCollegeData'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`allCollegeData`);
            return res.data;
        
        }
    })
    // console.log(allCollegeData);
    return [allCollegeData , refetch]
};

export default useCollege;