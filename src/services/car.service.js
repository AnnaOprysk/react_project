import axiosSevice from "./axios.service";
import {urls} from "../configs/urls";

export const carService={
    create: (car) => axiosSevice.post(urls.cars,car).then(value => value.data),
    getAll:()=>axiosSevice.get(urls.cars).then(value => value.data),
    getById:(id)=>axiosSevice.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById:(id,car)=>axiosSevice.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    deleteById:(id)=>axiosSevice.delete(`${urls.cars}/${id}`)
}
