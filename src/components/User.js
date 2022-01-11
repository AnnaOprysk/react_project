import React from 'react';

function User(props) {
    return (
        <div> {props.name}, {props.username}, email: {props.email}</div>
    );
}

export default User;
