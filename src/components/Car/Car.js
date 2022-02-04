import React from 'react';
import {useDispatch} from "react-redux";

import css from "./Car.module.css"
import {carToUpdate, deleteCarThunk} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
                <button onClick={() => dispatch(carToUpdate({car}))} style={{marginTop:'10px'}}>
                    Update
                </button>
                <button onClick={() => dispatch(deleteCarThunk({id}))} style={{marginTop:'10px'}}>
                    Delete
                </button>
            </div>

        </div>
    );
};

export {Car};