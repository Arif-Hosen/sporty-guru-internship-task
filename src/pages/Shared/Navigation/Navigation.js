import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div >
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container >
                    <Navbar.Brand href="/"><i className="fas fa-university fs-3"></i> University List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#select">Select Country</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;