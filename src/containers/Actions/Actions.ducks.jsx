import PropTypes from 'prop-types';


const SET_BUILDING = 'actions/SET_BUILDING';
const SET_BUYING = 'actions/SET_BUYING';
const SET_CLICK = 'action/SET_CLICK';
const SET_ERROR = 'actions/SET_ERROR';
const SET_RUNNING = 'actions/SET_RUNNING';

export const dispatchBuying = () => ({
  type: SET_BUYING,
});

export const dispatchBuilding = () => ({
  type: SET_BUILDING,
});

export const dispatchOnClick = (actionOnClick) => ({
  type: SET_CLICK,
  payload: { actionOnClick },
});

export const dispatchError = () => ({
  type: SET_ERROR,
});

export const dispatchRunning = () => ({
  type: SET_RUNNING,
});

export const initialState = {
  stage: 'running',
  actionOnClick: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BUYING:
      return { ...state, stage: 'buying' };

    case SET_BUILDING:
      return { ...state, stage: 'building' };

    case SET_CLICK:
      return { ...state, actionOnClick: action.payload.actionOnClick };

    case SET_ERROR:
      return { ...state, stage: 'error' };

    case SET_RUNNING:
      return { ...state, stage: 'running' };

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
