import React from 'react';

const UserPosts = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div style={{marginTop: '40px', border: '1px solid navy', padding: '15px'}}>
            <div>{id}. {title}</div>
            <div>UserId: {userId}</div>
            <div>Body: {body}</div>
        </div>
    );
}

export default UserPosts;