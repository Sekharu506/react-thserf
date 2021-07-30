import React, { useContext } from 'react';
import '../style.css';
import { btnContext } from '../Components/context.jsx';

const Delete = props => {
  const { cartState, setCart } = useContext(btnContext);
  const index = props.index;
  return (
    <div>
      <button
        onClick={() => {
          if (cartState[index] != 0) cartState[index]--;
          setCart({ ...cartState });
        }}
        className="delete"
      >
        Delete
      </button>
    </div>
  );
};
export default Delete;
