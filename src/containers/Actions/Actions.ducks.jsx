import PropTypes from 'prop-types';


// General actions.
const SET_CLICK = 'action/SET_CLICK';
const SET_ERROR = 'actions/SET_ERROR';
const SET_WAITING = 'actions/SET_WAITING';

// Running stage.
const SET_BUILDING = 'actions/SET_BUILDING';
const SET_BUYING = 'actions/SET_BUYING';
const SET_ROBBING = 'actions/SET_ROBBING';

// Only for Robbing container.
const SET_ROBBER_PAYLOAD = 'actions/SET_ROBBER_PAYLOAD';

export const dispatchOnClick = (actionOnClick) => ({
  type: SET_CLICK,
  payload: { actionOnClick },
});

export const dispatchError = () => ({
  type: SET_ERROR,
});

export const dispatchWaiting = () => ({
  type: SET_WAITING,
});

export const dispatchBuilding = () => ({
  type: SET_BUILDING,
});

export const dispatchBuying = () => ({
  type: SET_BUYING,
});

export const dispatchRobbing = () => ({
  type: SET_ROBBING,
});

export const dispatchRobberPayload = (position, username) => ({
  type: SET_ROBBER_PAYLOAD,
  payload: { position, username },
});

const initialState = {
  stage: 'waiting',
  actionOnClick: null,
  robberPayload: {},
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BUYING:
      return { ...state, stage: 'running/buying' };

    case SET_BUILDING:
      return { ...state, stage: 'running/building' };

    case SET_CLICK:
      return { ...state, ...payload };

    case SET_ERROR:
      return { ...state, stage: 'error' };

    case SET_ROBBER_PAYLOAD:
      return { ...state, robberPayload: payload };

    case SET_ROBBING:
      return { ...state, stage: 'running/robbing', robberPayload: {} };

    case SET_WAITING:
      return { ...state, stage: 'waiting' };

    default: return state;
  }
};

export default reducer;


dispatchOnClick.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};

reducer.propTypes = {
  state: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.string.isRequired,
    payload: PropTypes.func.isRequired,
  }).isRequired,
};
