import React, { useState } from 'react';
import SignupScreen from '../../components/Signup/Signup';
import { signup } from '../../utils/Api';

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

const Signup = () => {
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

      const onSuccess = () => { };

      const onFailure = (err) => {
        setData({
          ...initialState,
          errorMessage: err.message,
        });
      };

      signup(username, password, onSuccess, onFailure);
    }
  };

  return (
    <SignupScreen
      data={data}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default Signup;
