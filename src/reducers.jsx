import { combineReducers } from 'redux';

import Actions from './containers/Actions/Actions.ducks';
import Auth from './containers/Auth.ducks';
import Game from './containers/Game/Game.ducks';
import Rooms from './containers/Rooms/Rooms.ducks';

export default combineReducers({
  Actions,
  Auth,
  Game,
  Rooms,
});
