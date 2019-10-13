import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Alert from 'react-bootstrap/Alert';

import './Login.css';

export default function LoginForm(props) {
  const {
    data, handleSubmit, handleInputChange,
  } = props;

  const errorMessage = (
    <>
      <Alert variant="danger">
        <Alert.Heading>
          Error
        </Alert.Heading>
        {data.errorMessage}
      </Alert>
    </>
  );

  return (
    <div className="Login">
      {data.errorMessage ? errorMessage : ''}
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={data.password}
            onChange={handleInputChange}
            type="password"
            name="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={data.isSubmitting} type="submit">
          {data.isSubmitting ? 'Loading...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
