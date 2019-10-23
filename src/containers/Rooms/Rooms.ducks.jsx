import PropTypes from 'prop-types';

import { RoomType } from '../../utils/ApiTypes';


// Actions.
const SET_ERROR = 'rooms/SET_ERROR';
const SET_FROZEN = 'rooms/SET_FROZEN';
const SET_REFRESH = 'rooms/SET_REFRESH';
const SET_ROOMS = 'rooms/SET_ROOMS';
const SET_RUNNING = 'rooms/SET_RUNNING';
const SET_CREATE = 'rooms/SET_CREATE';

// Action creators.
export const setError = () => ({
  type: SET_ERROR,
});

export const setFrozen = () => ({
  type: SET_FROZEN,
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

export const setCreate = () => ({
  type: SET_CREATE,
});

export const initialState = {
  stage: 'empty',
  refresh: null,
  rooms: [],
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

    case SET_ROOMS:
      return { ...state, rooms: payload };

    case SET_RUNNING:
      return { ...state, stage: 'running' };

    case SET_CREATE:
      return { ...state, stage: 'create' };

    default: return state;
  }
};

export default reducer;


setRefresh.propTypes = {
  refresh: PropTypes.func.isRequired,
};

setRooms.propTypes = {
  rooms: PropTypes.arrayOf(RoomType).isRequired,
};

reducer.propTypes = {
  action: PropTypes.string.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(RoomType),
  ]).isRequired,
};
