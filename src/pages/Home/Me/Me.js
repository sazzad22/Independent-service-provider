import React from 'react';

import myself from '../../../images/me/the-nigmatic-YefEvN5CDLY-unsplash.jpg'

const Me = () => {
    return (
        // The second section of the website on the webpage
        <div className='row ms-lg-5 container' >
            <div className='col-sm-12 col-lg-6'>
                <img className='w-100 p-5 rounded' src={myself} alt="" />
            </div>
            <div className='col-sm-12 col-lg-6 p-5'>
                <h2> I am Jason Hoble</h2>
                <p>I am a professional wild life Photographer. </p>
                <p>I have always love capturing the right moment. Wild life Photography is a niche that I choose ,because I just love the nature. <br />If Your want to collab for a photography project I am down to that. I also do professional workshops and Blogs writing on photography.</p>
            </div>
        </div>
    );
};

export default Me;