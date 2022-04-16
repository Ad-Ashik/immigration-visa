import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();

    const checkOut = (id) => {
        navigate(`/checkout/${id}`)
    }

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
                    <button onClick={() => checkOut(id)} className='btn btn-primary w-100 p-3 fs-5'>Checkout here..</button>
                </div>
            </div>
        </div>
    );
};

export default Service;