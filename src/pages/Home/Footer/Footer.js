import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCopy, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-primary m-0 sticky-top'>
            <div className='p-5'>
                <div >
                    <p className='m-0 text-center '> <small>copyright <FontAwesomeIcon icon={faCopyright} />   {year} </small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;