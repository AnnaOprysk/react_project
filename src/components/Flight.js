import React from 'react';

const Flight = (props) => {
    return (
        <div className={'Wrap'}>
           <div>
               <h2> {props.missionName},<br/> {props.launchYear}</h2>
           </div>
           <div>
               <img src={props.pic} alt="mission_img"/>
           </div>
        </div>
    );
};

export default Flight;
