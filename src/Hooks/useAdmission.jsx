

import { useQuery } from "react-query";
import { axiosPublic } from "./usePublic";



const useAdmission = () => {


    const { refetch , data:admission = []}=useQuery({
        queryKey:['admission'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`admission`);
            return res.data;
        
        }
    })

    return [admission , refetch]
};

export default useAdmission;