import React from 'react';
import CurrentDate from '../Login/CurrentDate';
import Login from '../Login/FormLogin';
import Welcome from '../Login/Welcome';

function Home () {
    return(
        <>
            <CurrentDate />
            <Welcome />
            <Login /> 
        </>
    )
}

export default Home;
