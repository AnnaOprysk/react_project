import React from 'react';

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div style={{margin:'20px',backgroundColor:'lightgrey'}}>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;