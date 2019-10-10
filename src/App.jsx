import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import LobbyList from './lobbies/LobbyList';
import Resources from './cards/Resources';
import Development from './cards/Development';
import LoginScreen from './login/LoginScreen';
import Board from './board/Board';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/lobbies">Lobbies</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <LoginScreen />
        </Route>
        <Route path="/lobbies" exact>
          <LobbyList />
        </Route>
        <Route path="/resources" exact>
          <Resources />
        </Route>
        <Route path="/development" exact>
          <Development />
        </Route>
        <Route path="/board" exact>
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}
