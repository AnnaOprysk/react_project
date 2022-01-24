import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import {Comment} from "../../components";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getCommentByPost(id).then(value => setComments([...value]));
    }, [id]);

    return (
        <div>
            <div><Outlet/></div>
            <div>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export  {CommentsPage};