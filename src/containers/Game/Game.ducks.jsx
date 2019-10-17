import PropTypes from 'prop-types';

import {
  ActionsType, BoardType, HandType, InfoType,
} from '../../utils/ApiTypes';

// Actions.
const SET_ERROR = 'game/SET_ERROR';
const SET_FROZEN = 'game/SET_FROZEN';
const SET_REFRESH = 'game/SET_REFRESH';
const SET_STATE = 'game/SET_STATE';

// Action creators.
export const setError = () => ({
  type: SET_ERROR,
});

export const setFrozen = () => ({
  type: SET_FROZEN,
});

export const setRefresh = (refresh) => ({
  type: SET_REFRESH,
  payload: { refresh },
});

export const setRunningStage = (
  actions, board, hand, info,
) => ({
  type: SET_STATE,
  payload: {
    stage: 'running',
    actions,
    board,
    hand,
    info,
  },
});

export const initialState = {
  stage: 'empty',
  actions: {},
  board: {},
  hand: {},
  info: {},
  refresh: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...initialState, stage: 'error' };

    case SET_FROZEN:
      return { ...state, stage: 'frozen' };

    case SET_REFRESH:
      return { ...state, refresh: action.payload.refresh };

    case SET_STATE:
      return { ...state, ...action.payload };

    default: return state;
  }
};

export default reducer;


setRefresh.propTypes = {
  refresh: PropTypes.func.isRequired,
};

setRunningStage.propTypes = {
  actions: ActionsType,
  board: BoardType,
  hand: HandType,
  info: InfoType,
};

reducer.propTypes = {
  action: PropTypes.string.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      stage: PropTypes.string.isRequired,
      actions: ActionsType,
      board: BoardType,
      hand: HandType,
      info: InfoType,
    }),
  ]),
};
