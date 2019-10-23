import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SignupScreen from '../../components/Signup/Signup';
import { signup } from '../../utils/Mock';
import useForm from '../UseForm';

const Signup = () => {
  const [error, setError] = useState('');
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const {
    values,
    validate,
    changeUsername,
    changePassword,
  } = useForm();

  // Send data via API.
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const onSuccess = () => {
      setResponse(<Redirect to="/login" />);
    };
    const onFailure = (err) => {
      setError(err.message);
    };

    const { username, password } = values;
    signup(username, password, onSuccess, onFailure);
  };

  return (
    response
    || (
      <SignupScreen
        values={values}
        error={error}
        loading={loading}
        validate={validate}
        handleSubmit={handleSubmit}
        changeUsername={changeUsername}
        changePassword={changePassword}
      />
    )
  );
};

export default Signup;
