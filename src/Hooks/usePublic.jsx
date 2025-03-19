import axios from "axios";

export const axiosPublic = axios.create({
    baseURL:'https://college-booking-server-side-one.vercel.app'
})
const usePublic = () => {
   return axiosPublic
};

export default usePublic;