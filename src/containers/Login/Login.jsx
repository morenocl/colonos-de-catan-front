import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from '../Auth.ducks';
import LoginScreen from '../../components/Login/Login';
import { login } from '../../utils/Mock';
import useForm from '../UseForm';


const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

const Login = ({ setAuth }) => {
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

    const onSuccess = (res) => {
      setAuth(true);
      localStorage.setItem('token', JSON.stringify(res.token));
    };

    const onFailure = (err) => {
      setError(err.message);
    };

    const { username, password } = values;
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
};
