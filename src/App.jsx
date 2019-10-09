import React from 'react';

import LobbyList from './lobbies/lobbyList';
import Cards from './game/cards';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
	<div>
	<Cards />
	<LobbyList />
	</div>
  );
}

export default App;
