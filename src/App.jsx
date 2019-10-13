import React from 'react';

import Routes from './containers/Routes';
import NavBar from './containers/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
};


export default (App);
