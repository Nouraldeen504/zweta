import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ShopDropdown = () => {
  return (
    <>
      <NavDropdown.Item as={Link} to="/products/HomeAccessories" className='text-end'>منزلية</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/products/kitchen" className='text-end'>مطبخ</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/products/accessories" className='text-end'>اكسسوارات</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="/products/womenFashion" className='text-end'>ملابس نساء</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/products/menFashion" className='text-end'>ملابس رجال</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="/products/makeup" className='text-end'>مستحضرات تجميل</NavDropdown.Item>
    </>
  );
};

export default ShopDropdown;
