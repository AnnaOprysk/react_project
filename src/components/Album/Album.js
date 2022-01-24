import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div style={{marginTop: '20px', border: '3px solid grey', padding: '15px'}}>
            <div>Id:{id} </div>
            <div>Title: {title}</div>
            <div>UserId: {userId}</div>

            <div>
                <button style={{
                    height: '30px', width: '100px', fontSize: '15px', backgroundColor: 'steelblue',
                    borderRadius: '5px',margin: '20px'}}>
                    <Link to={`${id}/photos`} style={{textDecoration: 'none', color: 'white'}}>
                        Show photos
                    </Link>
                </button>
            </div>
        </div>

    );
};

export {Album};