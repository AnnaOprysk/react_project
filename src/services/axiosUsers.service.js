import axios from "axios";

import baseURL from "../constants/urlsUsers";

export const axiosServiceUsers = axios.create({baseURL});