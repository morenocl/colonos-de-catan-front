import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../App.ducks';
import { login } from '../utils/Api';
import LoginForm from './LoginForm';

const Login = ({ setAuth, setUser }) => {
  const initialState = {
    username: '',
    password: '',
    isSubmitting: false,
    errorMessage: '',
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: '',
    });

    const dispatchLogin = (resJson) => {
      if (resJson.token) {
        setAuth(true);
        setUser(data.username);
        localStorage.setItem('token', JSON.stringify(resJson.token));
      }
    };
    const setError = (error) => {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message,
      });
    };

    login(data.username, data.password, dispatchLogin, setError);
  };

  return (
    <LoginForm
      data={data}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default connect(
  null,
  actions,
)(Login);

Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};
