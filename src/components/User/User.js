import React from 'react';

import css from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className={css.wrap}>
            <div className={css.user}>{id}. {name}</div>
            <button className={css.userButton} onClick={() => getUser(user)}>Details</button>
        </div>
    );
};

export default User;
