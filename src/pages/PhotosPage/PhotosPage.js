import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import {Photo} from "../../components";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        albumService.getPhotosByAlbum(albumId).then(value => setPhotos([...value]));
    }, [albumId]);

    return (
        <div>
            <div>{photos.map(photo => <Photo key={photo.id} photo={photo}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PhotosPage};