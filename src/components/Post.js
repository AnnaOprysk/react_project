import React from 'react';

const Post = (props) => {
    return (
        <div>
            id: {props.id}. {props.title}; {props.body}
        </div>
    );
};

export default Post;