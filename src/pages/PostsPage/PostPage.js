import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import {Post} from "../../components";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <h2 style={{margin: '30px', textDecoration: 'underline'}}>List of posts:</h2>
                {posts.map(post => <Post key={post.id} post={post}/>)}</div>

            <div style={{margin: '30px', fontSize: '20px', width: '50%'}}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostPage};