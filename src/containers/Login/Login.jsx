import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from '../Auth.ducks';
import { login } from '../../utils/Api';
import LoginScreen from '../../components/Login/Login';


const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

const initialState = {
  username: '',
  password: '',
  loading: false,
  errorMessage: '',
};

const Login = ({ setAuth }) => {
  const [data, setData] = useState(initialState);

  // Handles username and password changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  // Send data via API.
  const handleSubmit = (e) => {
    e.preventDefault();

    setData({
      ...data,
      loading: true,
      errorMessage: '',
    });

    const onSuccess = (res) => {
      setAuth(true);
      localStorage.setItem('token', JSON.stringify(res.token));
    };

    const onFailure = (err) => {
      setData({
        ...initialState,
        errorMessage: err.message,
      });
    };

    const { username, password } = data;
    login(username, password, onSuccess, onFailure);
  };

  return (
    <LoginScreen
      data={data}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);


Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
};
