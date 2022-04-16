import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../images/banner/slider-1.png';
import slider2 from '../../../images/banner/slider-2.png';
import slider3 from '../../../images/banner/slider-3.png';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={slider3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Travels Immitration and Visa</p>
                    <h2>Gat A <span className='text-warning'>Visa</span> & <span className='text-warning'>Immitration</span></h2>
                    <button className='btn btn-primary p-2 my-2'>Book a Consultation!</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
                Easy Way to Get Visa

                <Carousel.Caption>
                    <p>WE ARE ALWAYS READY TO HERE YOU</p>
                    <h2> Easy <span className='text-primary'>Way</span> to Get <span className='text-primary'>Visa</span></h2>
                    <button className='btn btn-primary p-2 my-2'>Book a Consultation!</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>GET SUFFICIENT POINTS</p>
                    <h2 className='bg-dark text-white p-3 rounded'> For Skilled Visas In Global Immigration Summit</h2>
                    <button className='btn btn-primary p-2 my-2'>Book a Consultation!</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Banner;