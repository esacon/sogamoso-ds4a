import axios from "axios";
import { API_URL } from "src/Constants";

class HttpService{
    async get(url){
        return await axios.get(`${API_URL}${url}`);
    }

    async post(url){
        return await axios.post(`${API_URL}${url}`);
    }

    async put(url){
        return await axios.put(`${API_URL}${url}`);
    }
}

const service = new HttpService();
export default service;