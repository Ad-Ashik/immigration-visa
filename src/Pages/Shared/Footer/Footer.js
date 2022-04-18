import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <footer className='text-center my-5 text-primary'>
            <p >Copyright © {date.getFullYear()} . Immigration Visa Consultant</p>
        </footer>
    );
};

export default Footer;