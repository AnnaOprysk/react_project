import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createNewUser} from "../../store";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createNewUser({data}));
        reset();
    };

    return (
        <div style={{margin:'30px'}}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                <label>Username: <input type="text" placeholder={'username'}{...register('username')}/></label>
                <label>Email: <input type="text" placeholder={'email'}{...register('email')}/></label>
                <label>Phone: <input type="number" placeholder={'phone'}{...register('phone')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {UserForm};