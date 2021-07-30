import React, { useState, createContext } from 'react';
import Web from '../Components/web.jsx';
export const btnContext = createContext(null);
export const imageContext = createContext(null);
const Data = () => {
  const [images, setImage] = useState({
    1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344668503l/9422683.jpg',
    2: 'https://tutorialzine.com/media/2015/05/learn-js-4.jpg',
    3: 'https://uploads.sitepoint.com/wp-content/uploads/jquery4u/2012/07/JavaScript-Programmers-Reference.jpg'
  });
  let obj = {};
  Object.keys(images).forEach(value => (obj[value] = 0));
  const [cartState, setCart] = useState({ ...obj });
  return (
    <div>
      <btnContext.Provider value={{ cartState, setCart }}>
        <imageContext.Provider value={{ images, setImage }}>
          <Web />
        </imageContext.Provider>
      </btnContext.Provider>
    </div>
  );
};
export default Data;
