import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPosts from "../../components/UserPosts/UserPosts";

const UserPostsPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getPostByUser(id).then(value => setUserPosts([...value]));
    }, [id]);

    return (
        <div>
            <div>{userPosts.map(post => <UserPosts key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
}

export default UserPostsPage;