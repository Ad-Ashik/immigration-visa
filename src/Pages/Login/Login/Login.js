import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SoccailLogin from '../SocailLogin/SocailLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    let errorCheck, lodingCheck;
    if (error) {
        errorCheck = <p className='text-center text-danger'>Error: {error.message}</p>;
    }
    if (loading) {
        lodingCheck = <div className="text-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    const formSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('please check your email', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error('please entar your email', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='w-50 mx-auto border border-3 mt-5 p-4 rounded-3'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p>Forget your password? <Link to="" className='text-primary text-decoration-underline' onClick={resetPassword}>
                    Reset Password
                </Link>
                </p>
                <Button className='w-25 my-3' variant="primary" type="submit">
                    Login
                </Button>
                {lodingCheck}
                {errorCheck}
                <p className='text-center'>New to visa-onsultant? <Link to="/singup" className='text-primary text-decoration-underline'>
                    Please Register
                </Link>
                </p>
                <SoccailLogin></SoccailLogin>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;