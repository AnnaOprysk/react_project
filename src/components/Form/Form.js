import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";


const Form = ({update, carToUpdate: {id, model, price, year}}) => {
    const [formError, setFormError] = useState({});
    const {
        register, handleSubmit, watch, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    // const submit = (data) => {
    //     carService.create(data).then(value => console.log(value)).catch(error=>{
    //         setFormError(error.response.data)
    //     })
    // }

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id]);

    const submit = async (data) => {
        try {
            let newCar;
            if (id) {
                newCar = await carService.updateById(id, data)
            } else {
                newCar = await carService.create(data);
            }
            update(newCar);
        } catch (error) {
            setFormError(error.response.data);
        }
    };

    // watch(event => console.log(event));

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
};

export default Form;