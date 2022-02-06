import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../store";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const submit = (data) => {
        dispatch(createCar({data}));
        reset();
    }
    const submit2 = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
        reset();
    }
    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    return (
        <form style={{margin:'30px'}} onSubmit={handleSubmit(submit,submit2)}>
            <label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label>
            <label>Price: <input type="text" placeholder={'price'}{...register('price')}/></label>
            <label>Year: <input type="text" placeholder={'year'}{...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export {CarForm};