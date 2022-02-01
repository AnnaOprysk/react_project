import React from 'react';

import {carService} from "../../services/car.service";

const Car = ({car,update,setCarToUpdate}) => {
    const {id,model,price,year} = car;

const carDelete = async () => {
    await carService.deleteById(id);
    update({});
}

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarToUpdate(car)}>Update</button>
            <button onClick={carDelete}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;