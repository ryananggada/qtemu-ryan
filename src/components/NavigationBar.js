import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg='warning' variant='dark' expand='lg'>
            <Navbar.Brand href='#'>Qtemu</Navbar.Brand>
            <Nav className='mr-auto'>                    
                <Nav.Link>
                    <Link to='/'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/about'>About</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;