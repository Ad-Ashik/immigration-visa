import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">City: {name}</h5>
                    <p className='fw-bold'>Price: ${price}</p>
                    <p className="card-text mb-3"><span className='fw-bold'>Description: </span>{description}</p>
                </div>
                <div>
                    <button className='btn btn-primary w-100 p-3 fs-5'>Checkout here..</button>
                </div>
            </div>
        </div>
    );
};

export default Service;