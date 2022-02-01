import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarToUpdate}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} update={update} setCarToUpdate={setCarToUpdate}/>)}
        </div>
    );
};

export default Cars;