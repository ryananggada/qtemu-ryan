import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg='info' variant='dark' expand='lg'>
            <Navbar.Brand href='#'>Qtemu</Navbar.Brand>
            <Nav className='mr-auto'>                    
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;