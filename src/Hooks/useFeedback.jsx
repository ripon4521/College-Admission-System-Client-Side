

import { useQuery } from "react-query";
import { axiosPublic } from "./usePublic";



const useFeedback = () => {


    const { refetch , data:feedback = []}=useQuery({
        queryKey:['feedback'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`testimonials`);
            return res.data;
        
        }
    })

    return [feedback , refetch]
};

export default useFeedback;