import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ShopDropdown from './ShopDropdown';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark" className='p-3'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <p className='m-0 fs-3'>زويتة</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center" style={{ gap: '1rem' }}>
            <NavDropdown title="تسوق" id="basic-nav-dropdown" data-bs-theme="light" className='fs-5'>
              <ShopDropdown />
            </NavDropdown>
            <Nav.Link as={Link} to="/new" className='fs-5'>الجديد</Nav.Link>
            <Nav.Link as={Link} to="/about" className='fs-5'>من نحن؟</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='fs-5'>تواصل معنا</Nav.Link>
          </Nav>
          <Nav className="me-auto text-center fs-5" >
            <Nav.Link href="#cart">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
