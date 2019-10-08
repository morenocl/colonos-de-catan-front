import React from "react";
import { Button, Form } from "react-bootstrap";
import useLoginForm from "./LoginHook";

export default function Login() {
  const { inputs, handleInputChange, handleSubmit, validate } = useLoginForm();

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={inputs.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={inputs.password}
            onChange={handleInputChange}
            type="password"
          />
        </Form.Group>
        <Button
          block
          disabled={!validate(inputs.username, inputs.password)}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
