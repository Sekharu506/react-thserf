import React, { Component, useContext } from 'react';
import Book from '../Components/book.jsx';
import Add from '../Components/addButton.jsx';
import { imageContext } from '../Components/context.jsx';
import Delete from './deleteButton.jsx';
const Books = () => {
  const { images, setImage } = useContext(imageContext);

  return (
    <div>
      {Object.keys(images).map(i => {
        return (
          <div>
            <Book l={images[i]} key={i} />
            <div className="btn">
              <Add index={i} />
              <Delete index={i} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
