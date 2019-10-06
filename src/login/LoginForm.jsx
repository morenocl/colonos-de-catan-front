import React from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./LoginForm.css";

function LoginForm(props) {
  const {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
    validate
  } = props;

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={username}
            onChange={handleChangeUsername}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </Form.Group>
        <Button block disabled={!validate(username, password)} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeUsername: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired
};

export default LoginForm;
