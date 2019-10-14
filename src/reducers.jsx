import { combineReducers } from 'redux';

import Auth from './containers/Auth.ducks';
import Rooms from './containers/Rooms/Rooms.ducks';

export default combineReducers({
  Auth,
  Rooms,
});
