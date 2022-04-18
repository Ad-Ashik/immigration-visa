import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SoccailLogin from '../SocailLogin/SocailLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (user) {
        console.log(user)
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

    const formSubmit = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home')
    }



    return (
        <div className='w-50 mx-auto border border-3 mt-5 p-4 rounded-3'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-25' variant="primary" type="submit">
                    Sing Up
                </Button>
                {lodingCheck}
                {errorCheck}
                <p className='text-center'>Already have an account? <Link to="/login" className='text-primary text-decoration-underline'>
                    Please Login
                </Link>
                </p>
                <SoccailLogin></SoccailLogin>
            </Form>
        </div >
    );
};

export default Register;