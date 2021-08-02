import Header from '../Components/header.jsx';
import Books from '../Components/books.jsx';
import Home from '../Components/home.jsx';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style.css';
export const Web = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
        </Switch>
      </Router>
    </div>
  );
};

export default Web;
