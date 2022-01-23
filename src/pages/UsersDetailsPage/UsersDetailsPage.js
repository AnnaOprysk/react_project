import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";

const UsersDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}));
    }, [id]);


    return (
        <div>
            {user && (
                <div>
                    <div>id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Address: {user.address.street},
                        {user.address.suite},
                        {user.address.city},
                        {user.address.zipcode}
                    </div>
                    <div>Phone: {user.phone}</div>
                    <div>Website: {user.website}</div>
                    <div>Company: {user.company.name},{user.company.catchPhrase},{user.company.bs}</div>
                    <div>
                        <button style={{
                            height: '30px', width: '200px', fontSize: '15px', backgroundColor: 'steelblue',
                            borderRadius: '5px', marginTop: '10px'}}>
                            <Link to={id.toString()} style={{textDecoration: 'none', color: 'white'}}>
                                Show posts of  current user
                            </Link>
                        </button>

                    </div>
                </div>
            )}
            <div><Outlet/></div>

        </div>
    );
};

export default UsersDetailsPage;