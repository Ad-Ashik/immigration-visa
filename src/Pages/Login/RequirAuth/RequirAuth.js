import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequirAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <div class="text-center ">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequirAuth;