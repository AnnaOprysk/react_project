import axios from "axios";
import baseURL from "../configs/urls";

const axiosSevice = axios.create({
    baseURL
});

export default axiosSevice;