import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import PropTypes from 'prop-types';

import Error from '../Error';

import './Login.css';


const Login = (props) => {
  const {
    data, handleSubmit, handleInputChange,
  } = props;
  const {
    username, password, loading, errorMessage,
  } = data;

  const userForm = (
    <FormGroup bssize="large">
      <FormLabel>
        Username
      </FormLabel>
      <FormControl
        autoFocus
        name="username"
        onChange={handleInputChange}
        type="text"
        value={username}
      />
    </FormGroup>
  );

  const passForm = (
    <FormGroup bssize="large">
      <FormLabel>
        Password
      </FormLabel>
      <FormControl
        name="password"
        onChange={handleInputChange}
        type="password"
        value={password}
      />
    </FormGroup>
  );

  const button = (
    <Button
      block
      bssize="large"
      disabled={loading}
      type="submit"
    >
      {loading ? 'Loading...' : 'Login'}
    </Button>
  );

  return (
    <div className="Login">
      {errorMessage && <Error message={errorMessage} />}
      <form onSubmit={handleSubmit}>
        {userForm}
        {passForm}
        {button}
      </form>
    </div>
  );
};

export default Login;


Login.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
