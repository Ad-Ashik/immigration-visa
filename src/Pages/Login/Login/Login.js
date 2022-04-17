import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home')
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

    const formSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='w-50 mx-auto border border-3 mt-5 p-4 rounded-3'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                {loading}
                {errorCheck}
                <p className='text-center'>New to visa-onsultant? <Link to="/singup" className='text-primary text-decoration-underline'>
                    Please Register
                </Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;