import {urlsUsers} from "../constants";
import {axiosServiceUsers} from "./axiosUsers.service";

export const userService = {
    getAllUsers: () => axiosServiceUsers.get(urlsUsers.users).then(value => value.data),
    createUser: (user) => axiosServiceUsers.post(urlsUsers.users, user).then(value => value.data),
    deleteUser: (id) => axiosServiceUsers.delete(`${urlsUsers.users}/${id}`)
}

