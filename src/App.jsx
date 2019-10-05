import React from 'react';

import LobbyList from './lobbies/lobbyList';
import { listLobbies } from './utils/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <LobbyList lobbies={listLobbies()} />
  );
}

export default App;
