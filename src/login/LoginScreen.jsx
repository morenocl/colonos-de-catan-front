import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../App.ducks';


const mapStateToProps = (state) => ({
  auth: state.App.auth,
});

const LoginScreen = ({ auth, setAuth }) => {
  const authenticate = (value, token) => {
    setAuth(value);
    localStorage.setItem('token', token);
  };

  if (auth) return (<Redirect to="/rooms" />);

  return (
    <Button
      onClick={() => authenticate(true, 'token')}
    >
    Login
    </Button>
  );
};

export default connect(mapStateToProps, actions)(LoginScreen);


LoginScreen.propTypes = {
  auth: PropTypes.bool.isRequired,
  setAuth: PropTypes.func.isRequired,
};
