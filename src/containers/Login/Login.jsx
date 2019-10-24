import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  setAuth as dispatchAuth,
  setUser as dispatchUser,
} from '../Auth.ducks';
import LoginScreen from '../../components/Login/Login';
import { login } from '../../utils/Mock';
import useForm from '../UseForm';


const mapDispatchToProps = ({
  setAuth: dispatchAuth,
  setUser: dispatchUser,
});

const Login = ({ setAuth, setUser }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    values,
    validate,
    changeUsername,
    changePassword,
  } = useForm();

  // Send data via API.
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const { username, password } = values;

    const onSuccess = (res) => {
      setAuth(true);
      setUser(username);
      localStorage.setItem('token', JSON.stringify(res.token));
    };

    const onFailure = (err) => {
      setError(err.message);
    };

    login(username, password, onSuccess, onFailure);
  };

  return (
    <LoginScreen
      values={values}
      error={error}
      loading={loading}
      validate={validate}
      handleSubmit={handleSubmit}
      changeUsername={changeUsername}
      changePassword={changePassword}
    />
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);


Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};
