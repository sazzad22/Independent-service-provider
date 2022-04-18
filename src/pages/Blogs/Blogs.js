import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start mx-5 p-5 min-vh-100 mx-auto '>
            <div className='p-5'>
                <h1 className='text-primary'>Q and A</h1>
                <br />
                <h5 className='text-secondary'>Difference between authorization and authentication?</h5>
                <br />
                <h5>Authentication is determining and gathering information about who the user is. On the other hand Authorization is what kind of access a user has on different sections or data on a website or app . <br />In case of Authentication ,the website checks if the user is valid ,by asking for the email and passwords. Authorization is like when a page admin has certain access to the website that the average user don't have. </h5>
                <br />

                <h5 className='text-secondary'> Why are you using firebase? What other options do you have to implement authentication?</h5>
                <br />
                <h5>Firebase provides great authentication services. Their also provide documentation on their authentication flow.One easily implement different sign in,sign out methods and manage the users.Firebase also provides hosting for your web apps and mobile applications. <br />Alternatives for firebase authentication are Okta,Passport,Keycloak, MongoDB etc </h5>
                <br />
                <h5 className='text-secondary'> What other services does firebase provide other than authentication</h5>
                <br />
                <h5>Along with Authentication firebase also provides hosting,google analytics,cloud storage,cloud messaging.Using These services one can develope web, mobile or other applications more easily and efficiently.For this website we also have used firebase authentication and hosting services. <br />Using google analytics of firebase one can measure the demographics of a business.Cloud messaging is a great way to be notified and be updated about one's website.</h5>
            </div>
        </div>
    );
};

export default Blogs;