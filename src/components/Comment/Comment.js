import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <div style={{marginTop: '40px', border: '1px solid navy', padding: '15px'}}>
            <div>{id}. {name}</div>
            <div>PostId: {postId}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;