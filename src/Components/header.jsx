import React, { Component } from 'react';
import CartButton from '../Components/cartbtn.jsx';
import './header.css';
const Header = () => {
  return (
    <div className="header">
      <p>Shop The Books</p>
      <CartButton />
    </div>
  );
};
export default Header;
