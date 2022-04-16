import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='w-50 mx-auto border border-3 mt-5 p-4 rounded-3'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sing Up
                </Button>
            </Form>
        </div>
    );
};

export default Register;