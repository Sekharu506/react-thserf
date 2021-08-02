import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../Components/cartbtn.jsx';
import './header.css';
const Header = () => {
  return (
    <div className="header">
      <h3>ShopMe.Com</h3>
      <Link to="/">
        <h6 className="home">Home</h6>
      </Link>
      <Link to="books">
        <h6 className="shop">Shop Now</h6>
      </Link>
      <CartButton />
    </div>
  );
};
export default Header;
