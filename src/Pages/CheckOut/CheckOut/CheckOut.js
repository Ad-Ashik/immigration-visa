import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkoutId } = useParams();
    return (
        <div>
            <h2>Please continue your order: {checkoutId}</h2>
        </div>
    );
};

export default CheckOut;