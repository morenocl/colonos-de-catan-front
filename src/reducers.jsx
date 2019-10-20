import { combineReducers } from 'redux';

import Auth from './containers/Auth.ducks';
import Board from './containers/Board/Board.ducks';
import Game from './containers/Game/Game.ducks';
import Rooms from './containers/Rooms/Rooms.ducks';

export default combineReducers({
  Auth,
  Board,
  Game,
  Rooms,
});
