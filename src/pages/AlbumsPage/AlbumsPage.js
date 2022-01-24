import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import {Album} from "../../components";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumByUser(id).then(value => setAlbums([...value]));
    }, [id]);

    return (
        <div>
            <div>{albums.map(album => <Album key={album.id} album={album}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {AlbumsPage};