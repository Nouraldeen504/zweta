import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const ShopDropdown = () => {
  return (
    <>
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </>
  );
};

export default ShopDropdown;
