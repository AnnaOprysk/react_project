import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {getAllUsers} from "../../store";

const Users = () => {
    const {users, status, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loading</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
            {status === 'fulfilled' && <h1>That's all registered users</h1>}
        </div>
    );
};

export {Users};