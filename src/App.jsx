import React from 'react';

import LobbyList from './lobbies/LobbyList';
import Board from './board/Board';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <LobbyList />
      <Board id={1} />
    </div>
  );
}
