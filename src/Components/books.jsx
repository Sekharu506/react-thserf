import React, { Component, useContext } from 'react';
import Book from '../Components/book.jsx';
import Add from '../Components/addButton.jsx';
import { imageContext } from '../Components/context.jsx';
import Delete from './deleteButton.jsx';
import { btnContext } from '../Components/context.jsx';
import '../style.css';
const Books = () => {
  const { images, setImage } = useContext(imageContext);
  const { cartState, setCart } = useContext(btnContext);

  return (
    <div>
      {Object.keys(images).map(i => {
        return (
          <div className="books">
            <div>
              <Book l={images[i]} key={i} />

              <div className="btn">
                <Add index={i} />
                <label className="lb"> {cartState[i]} </label>
                <Delete index={i} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
