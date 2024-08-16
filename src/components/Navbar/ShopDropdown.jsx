import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const ShopDropdown = () => {
  return (
    <>
      <NavDropdown.Item href="#home" className='text-end'>منزلية</NavDropdown.Item>
      <NavDropdown.Item href="#fashion" className='text-end'>ملابس</NavDropdown.Item>
      <NavDropdown.Item href="#makeup" className='text-end'>مستحضرات تجميل</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </>
  );
};

export default ShopDropdown;
