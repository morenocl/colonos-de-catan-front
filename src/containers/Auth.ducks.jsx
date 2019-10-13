import PropTypes from 'prop-types';


// Actions.
export const SET_AUTH = 'app/SET_AUTH';

export const initialState = {
  auth: !!localStorage.getItem('token'),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, auth: action.payload };

    default: return state;
  }
};

export const setAuth = (value) => ({ type: SET_AUTH, payload: value });

export default reducer;


reducer.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
  }),
  action: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
};

setAuth.propTypes = {
  value: PropTypes.bool.isRequired,
};
