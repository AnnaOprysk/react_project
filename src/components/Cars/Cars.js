import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);

    useEffect(() => {
        carService.deleteById(id).then(value => setCars([...value]))
    }, [id]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;