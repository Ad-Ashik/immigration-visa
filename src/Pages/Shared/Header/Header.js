import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='w-100' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#exparts">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav className='fs-5'>
                        <Nav.Link as={Link} to="/about">Login</Nav.Link>
                        <span className='mt-2'>|</span>
                        <Nav.Link as={Link} to="/about">Sing Up</Nav.Link>
                        {/* {
                            user ?
                                <Nav.Link as={Link} to="login" onClick={singOut}>
                                    Sing Out
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;