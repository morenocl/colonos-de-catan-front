import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from './Auth.ducks';
import NavBarScreen from '../components/NavBar';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});

const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

export const NavBar = ({ auth, setAuth }) => {
  const logout = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  return (<NavBarScreen auth={auth} logout={logout} />);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);


mapStateToProps.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
  }).isRequired,
};

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  setAuth: PropTypes.func.isRequired,
};
