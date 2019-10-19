import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from '../Auth.ducks';
import LoginScreen from '../../components/Login/Login';
import { login } from '../../utils/Api';


const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

const initialState = {
  username: '',
  password: '',
  loading: false,
  errorMessage: '',
  formErrors: {
    username: '',
    password: '',
  },
};

const passwordRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/,
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    // eslint-disable-next-line no-unused-expressions
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    // eslint-disable-next-line no-unused-expressions
    val === '' && (valid = false);
  });

  return valid;
};

const Login = ({ setAuth }) => {
  const [data, setData] = useState(initialState);

  // Handles username and password changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formErrors = { ...data.formErrors };

    switch (name) {
      case 'username':
        // eslint-disable-next-line operator-linebreak
        formErrors.username =
          value.length < 4 ? 'minimum 4 characaters required' : '';
        break;
      case 'password':
        // eslint-disable-next-line operator-linebreak
        formErrors.password = passwordRegex.test(value)
          ? '' : 'invalid password';
        break;
      default:
        break;
    }

    setData({
      ...data,
      formErrors,
      [name]: value,
    });
  };

  // Send data via API.
  const handleSubmit = (e) => {
    e.preventDefault();

    const { formErrors, username, password } = data;
    if (formValid({ formErrors, username, password })) {
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

      login(username, password, onSuccess, onFailure);
    }
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