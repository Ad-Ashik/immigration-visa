import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocailLogin.css';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    let errorCheck, lodingCheck;
    if (error) {
        errorCheck = <p className='text-center text-danger'>Error: {error.message}</p>;
    }
    if (loading) {
        lodingCheck = <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    return (
        <div className='mx-auto w-50 ' >
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>
            {errorCheck}
            {lodingCheck}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary w-100 p-2 not-hover'>
                    <img style={{ width: '35px' }} src='https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg' alt="" />
                    <span className='px-1'>Google Sing In</span>
                </button>
                <button className='btn btn-outline-primary w-100 p-2 my-3 not-hover'>
                    <img style={{ width: '35px' }} src='' alt="" />
                    <span className='px-1'>GitHub Sing In</span>
                </button>
                <button className='btn btn-outline-primary w-100 p-2 not-hover'>
                    <img style={{ width: '35px' }} src='' alt="" />
                    <span className='px-1'>Facebook Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;