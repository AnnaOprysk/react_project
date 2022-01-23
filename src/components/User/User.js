import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <div>
                <Link to={id.toString()} state={user} style={{textDecoration: 'unset'}}>
                    <h2 style={{margin: '30px', color: 'midnightblue'}}>{id}. {name}</h2>
                </Link>

                <div>
                    <button style={{
                        height: '30px', width: '100px', fontSize: '15px', backgroundColor: 'steelblue',
                        borderRadius: '5px',marginLeft: '30px'}}>
                        <Link to={`${id}/albums`} style={{textDecoration: 'none', color: 'white'}}>
                            Show albums
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;