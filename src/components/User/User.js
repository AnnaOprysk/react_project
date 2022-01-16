import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div style={{display: 'flex'}}>
            <div>{id}. {name}, {username}, email:{email}</div>
        </div>
    );
};

export default User;
