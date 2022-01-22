import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <Link to={id.toString()} state={user} style={{textDecoration: 'unset'}}>
                <h2 style={{margin: '30px', color: 'midnightblue'}}>{id}. {name}</h2>
            </Link>
        </div>
    );
};

export default User;