import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='w-100' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-uppercase">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#visa">Visa</Nav.Link>
                        <Nav.Link href="home#coutry">Country</Nav.Link>
                        <Nav.Link href="home#exparts">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                    </Nav>
                    <Nav className='fs-5'>
                        {
                            user ?
                                <>
                                    <Nav.Link className='fs-6 mt-1' as={Link} to="update">
                                        {user.displayName}
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="login" onClick={logout}>
                                        Sing Out
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <span className='mt-2'>|</span>
                                    <Nav.Link as={Link} to="/singup">Sing Up</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;