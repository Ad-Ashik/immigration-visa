import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import gitLogo from '../../../images/socail/git-logo.png';
import fbLogo from '../../../images/socail/fb-logo.png';
import './SocailLogin.css';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    if (user || userGit || userFb) {
        navigate('/home');
    }

    let errorCheck, lodingCheck;
    if (error || errorGit || errorFb) {
        errorCheck = <p className='text-center text-danger'>Error: {error?.message} {errorGit?.message} {errorFb?.message}</p>;
    }
    if (loading || loadingGit || loadingFb) {
        lodingCheck = <div className="text-center mb-3">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
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
                <button onClick={() => signInWithGithub()} className='btn btn-outline-primary w-100 p-2 my-3 not-hover'>
                    <img style={{ width: '24px' }} src={gitLogo} alt="" />
                    <span className='px-2'>GitHub Sing In</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-outline-primary w-100 p-2 not-hover'>
                    <img className='ms-3' style={{ width: '24px' }} src={fbLogo} alt="" />
                    <span className='px-2'>Facebook Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;