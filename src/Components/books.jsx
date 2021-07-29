import React, { Component } from 'react';
import Book from '../Components/book.jsx';
import Add from '../Components/addButton.jsx';
export default class Books extends Component {
  constructor(props) {
    super(props);
    this.images = {
      1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344668503l/9422683.jpg',
      2: 'https://tutorialzine.com/media/2015/05/learn-js-4.jpg',
      3: 'https://uploads.sitepoint.com/wp-content/uploads/jquery4u/2012/07/JavaScript-Programmers-Reference.jpg'
    };
    this.arr = Object.keys(this.images);
  }

  render() {
    return (
      <div>
        {this.arr.map(i => {
          return (
            <div>
              <Book l={this.images[i]} key={i} />
              <Add index={i} />
            </div>
          );
        })}
      </div>
    );
  }
}
