import React, {useEffect, useState} from 'react';

import Flight from "./Flight";


const Flights = () => {
    const [flights,setFlights]= useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                setFlights(value.filter(value => value.launch_year !== '2020'));
            });

    }, []);

    return <div>
        {flights.map(value => <Flight
            key={value.flight_number}
            missionName={value.mission_name}
            launchYear={value.launch_year}
            pic={value.links.mission_patch_small}
        />)}
    </div>;


};

export default Flights;

