import React from 'react';

const UserDetails = ({user,getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div style={{marginLeft: '30px',fontSize:'30px'}}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{address.street},{address.suite},{address.city},{address.zipcode}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <div>{company.name},{company.catchPhrase},{company.bs}</div>
            <button style={{background:'lavender',height:'30px',width:'90px',borderRadius:'5px'}} onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;
