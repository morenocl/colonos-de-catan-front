import { useState } from 'react';

const initialState = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
};
const useForm = () => {
  const [values, setValues] = useState(initialState);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Handles Username changes.
  const changeUsername = (e) => {
    let username = e.target.value;
    let valid = true;
    let error = '';

    // Validation
    if (!username) {
      username = '';
      valid = false;
      error = 'This field is required';
    } else if (username.length < 4) {
      valid = false;
      error = 'Please enter at leaset 4 characters';
    }

    setValues({
      ...values,
      username,
      usernameError: error,
    });
    setUsernameValid(valid);
  };

  // Handles Username changes.
  const changePassword = (e) => {
    let password = e.target.value;
    let valid = true;
    let error = '';

    // Validation
    if (!password) {
      password = '';
      valid = false;
      error = 'This field is required';
    } else if (password.length < 8) {
      valid = false;
      error = 'Please enter at leaset 8 characters';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/.test(password)) {
      valid = false;
      error = 'Please provide a valid password';
    }

    setValues({
      ...values,
      password,
      passwordError: error,
    });
    setPasswordValid(valid);
  };

  const validate = () => (usernameValid && passwordValid);

  return {
    changeUsername,
    changePassword,
    validate,
    values,
  };
};

export default useForm;
