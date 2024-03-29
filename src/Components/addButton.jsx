import React, { Component, useContext } from 'react';
import '../style.css';
import { btnContext } from '../Components/context.jsx';

const Add = props => {
  const { cartState, setCart } = useContext(btnContext);
  let index = props.index;

  return (
    <div>
      <button
        onClick={() => {
          cartState[index]++;
          setCart({ ...cartState });
        }}
        className="add"
      >
        Add
      </button>
    </div>
  );
};
export default Add;
