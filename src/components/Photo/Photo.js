import React from 'react';

const Photo = ({photo}) => {
    const {id, albumId, title, url} = photo;

    return (
            <div style={{marginTop: '40px', border: '3px solid navy', padding: '15px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                    <div>Id:{id} </div>
                    <div>Title: {title}</div>
                    <div>AlbumId: {albumId}</div>
                </div>
                <div> <img src={url} alt="pic" style={{width:'200px',height:'200px'}}/> </div>
            </div>
    );
};

export {Photo};