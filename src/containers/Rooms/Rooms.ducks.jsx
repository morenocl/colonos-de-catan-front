import PropTypes from 'prop-types';


// Actions.
const SET_ERROR = 'rooms/SET_ERROR';
const SET_FROZEN = 'rooms/SET_FROZEN';
const SET_ROOM = 'rooms/SET_ROOM';
const SET_REFRESH = 'rooms/SET_REFRESH';
const SET_ROOMS = 'rooms/SET_ROOMS';
const SET_RUNNING = 'rooms/SET_RUNNING';

// Action creators.
export const setError = () => ({
  type: SET_ERROR,
});

export const setFrozen = () => ({
  type: SET_FROZEN,
});

export const setChosenRoom = (room) => ({
  type: SET_ROOM,
  payload: room,
});

export const setRefresh = (refresh) => ({
  type: SET_REFRESH,
  payload: refresh,
});

export const setRooms = (rooms) => ({
  type: SET_ROOMS,
  payload: rooms,
});

export const setRunning = () => ({
  type: SET_RUNNING,
});

export const initialState = {
  stage: 'empty',
  refresh: null,
  rooms: [],
  chosen: {},
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      return { ...initialState, stage: 'error' };

    case SET_FROZEN:
      return { ...state, stage: 'frozen' };

    case SET_REFRESH:
      return { ...state, refresh: payload };

    case SET_ROOM:
      return { ...state, chosen: payload };

    case SET_ROOMS:
      return { ...state, rooms: payload };

    case SET_RUNNING:
      return { ...state, stage: 'running' };

    default: return state;
  }
};

export default reducer;


export const roomType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  max_players: PropTypes.number.isRequired,
});

export const stateType = PropTypes.shape({
  stage: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(roomType).isRequired,
});

setChosenRoom.propTypes = {
  room: roomType.isRequired,
};

setRefresh.propTypes = {
  refresh: PropTypes.func.isRequired,
};

setRooms.propTypes = {
  rooms: PropTypes.arrayOf(roomType).isRequired,
};

reducer.propTypes = {
  action: PropTypes.string.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(roomType),
  ]).isRequired,
};
