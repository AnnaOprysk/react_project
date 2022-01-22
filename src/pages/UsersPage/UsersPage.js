import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <h2 style={{margin: '30px', textDecoration: 'underline'}}>List of users:</h2>
                {users.map(user => <User key={user.id} user={user}/>)}</div>

            <div style={{margin: '30px', fontSize: '20px', width: '50%'}}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;