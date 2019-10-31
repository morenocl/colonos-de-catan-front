import PropTypes from 'prop-types';

const SET_CLICK = 'info/SET_CLICK';

export const dispatchOnClick = (playerOnClick) => ({
  type: SET_CLICK,
  payload: { playerOnClick },
});

const playerOnClick = () => ((player) => (() => {
  console.log(`Clicked by:${player.username}`);
}));

export const initialState = {
  playerOnClick: playerOnClick(),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CLICK:
      return { ...state, playerOnClick: action.payload.playerOnClick };

    default: return state;
  }
};

export default reducer;

dispatchOnClick.propTypes = {
  playerOnClick: PropTypes.func.isRequired,
};

reducer.propTypes = {
  state: PropTypes.shape({
    playerOnClick: PropTypes.func.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.string.isRequired,
    payload: PropTypes.func.isRequired,
  }).isRequired,
};
