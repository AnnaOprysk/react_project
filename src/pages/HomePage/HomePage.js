import React from 'react';

import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.home}>
            <h3> WELCOME</h3>

            {/*<video src={'https://www.youtube.com/watch?v=tVlcKp3bWH8'}>Play</video>*/}
            {/*<button onClick=" myVideo.play()">Play</button>*/}

        </div>
    );
};

export {HomePage};