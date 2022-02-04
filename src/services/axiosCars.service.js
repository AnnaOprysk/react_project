import axios from "axios";

import baseURL from "../constants/urlsCars";

export const axiosServiceCars = axios.create({baseURL});
