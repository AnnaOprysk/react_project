import React from 'react';
import {useDispatch} from "react-redux";

import css from './User.module.css'
import {deleteUserThunk} from "../../store";

const User = ({user}) => {
    const {id, name, username, email, phone} = user;
    const dispatch = useDispatch();

    return (
        <div className={css.user}>
            <div>
                <div>Id: {id}</div>
                <div>Name:{name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <button onClick={() => dispatch(deleteUserThunk({id}))} style={{marginTop: '10px'}}>Delete</button>
            </div>
        </div>
    );
};

export {User};