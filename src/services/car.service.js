import {axiosServiceCars} from "./axiosCars.service";
import {urlsCars} from "../constants";

export const carService = {
    getAll: () => axiosServiceCars.get(urlsCars.cars).then(value => value.data),
    create: (car) => axiosServiceCars.post(urlsCars.cars, car).then(value => value.data),
    deleteById: (id) => axiosServiceCars.delete(`${urlsCars.cars}/${id}`),
    updateById:(id,car) => axiosServiceCars.patch(`${urlsCars.cars}/${id}`,car).then(value => value.data)
};