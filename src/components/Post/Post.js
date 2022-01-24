import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post} style={{textDecoration: 'unset'}}>
                <h2 style={{margin: '30px', color: 'midnightblue'}}>{id}. {title}</h2>
            </Link>
        </div>
    );
};

export {Post};