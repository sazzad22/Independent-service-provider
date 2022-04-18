import React from 'react';
import Banner from '../Banner/Banner';
import Me from '../Me/Me';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* Compinents on the home page */}
            <Banner></Banner>
            <Me></Me>
            <Services></Services>
        </div>
    );
};

export default Home;