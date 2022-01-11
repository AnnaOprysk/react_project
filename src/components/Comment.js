import React from 'react';

const Comment = (props) => {
    return (
        <div>
            id: {props.id}. {props.name}; email: {props.email}; {props.body}
        </div>
    );
};

export default Comment;