import axios from "axios";
import { base_url } from "../../Utils/base_url";
import {config} from "../../Utils/axiosConfig";

 const login = async( user ) => {
    const response = await axios.post(`${base_url}user/admin-login`, user)
    if(response.data){
      localStorage.setItem("user", JSON.stringify(response.data));
    };
    
    return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, 
  
  config
  );

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuserid/${id}`,
    " ",
    config
  );
  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};
export default authService;

