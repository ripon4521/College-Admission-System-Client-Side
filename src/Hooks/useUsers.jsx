

import { useQuery } from "react-query";
import { axiosPublic } from "./usePublic";



const useUsers = () => {


    const { refetch , data:users = []}=useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`users`);
            return res.data;
        
        }
    })

    return [users , refetch]
};

export default useUsers;