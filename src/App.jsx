import React from 'react';

import Resources from './cards/Resources';
import Cards from './cards/Cards';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Resources id={1} />
      <Cards id={1} />
    </div>
  );
}

export default App;
