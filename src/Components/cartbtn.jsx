import React, { Component, useContext } from 'react';
import { btnContext } from '../Components/context.jsx';
import './cartbtn.css';
const CartButton = () => {
  const { cartState, setCart } = useContext(btnContext);
  let totalCart = 0;
  Object.keys(cartState).forEach(
    val => (totalCart = cartState[val] + totalCart)
  );
  {
    return (
      <div>
        <button className="cartbtn">Cart {totalCart}</button>
      </div>
    );
  }
};
export default CartButton;
