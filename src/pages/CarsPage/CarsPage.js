import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store";
import {Car, CarForm} from "../../components";

const CarsPage = () => {
    const {cars, status, error} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div>
            <CarForm/>
            {status === 'pending' && <h1>Loading</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
            {status === 'fulfilled' && <h1>That's all cars in your list.</h1>}
        </div>
    );
};

export {CarsPage};