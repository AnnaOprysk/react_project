import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}));
    }, [id]);

    return (
        <div>
            {post && (
                <div>
                    <div>id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <div>
                        <button style={{
                            height: '30px', width: '300px', fontSize: '15px', backgroundColor: 'steelblue',
                            borderRadius: '5px', marginTop: '10px'
                        }}>
                            <Link to={id.toString()} style={{textDecoration: 'none', color: 'white'}}>
                                Show comments of current post
                            </Link>
                        </button>

                    </div>
                </div>
            )}
            <div><Outlet/></div>
        </div>
    );
};

export default PostDetailsPage;