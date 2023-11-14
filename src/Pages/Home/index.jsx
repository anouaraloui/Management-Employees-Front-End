import React from 'react';
import CurrentDate from '../Login/CurrentDate';
import Login from '../Login/FormLogin';
import Welcome from '../Login/Welcome';
import './index.css'
function Home () {
    return(
        <>
            <CurrentDate />
            <Welcome />
            <div className='login'>
               <Login />  
            </div>
            
        </>
    )
}

export default Home;
