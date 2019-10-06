import React, { Component } from "react";
import LoginForm from "./LoginForm";

import { login } from "../utils/httpService";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  validateForm(username, password) {
    return username && username.length > 0 && (password && password.length > 0);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  async handleSubmit(submitEvent) {
    submitEvent.preventDefault();

    try {
      // await "holds" the execution until the async function completes
      const loginResponse = await login({
        username: this.state.username,
        password: this.state.password
      });
      if (
        loginResponse.user &&
        loginResponse.user.username &&
        loginResponse.token
      ) {
        this.props.userHasAuthenticated(
          true,
          loginResponse.user.username,
          loginResponse.token
        );
        this.props.history.push("/");
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <LoginForm
        username={this.state.username}
        password={this.state.password}
        handleChangeUsername={e => this.handleChange(e)}
        handleChangePassword={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
        validate={this.validateForm}
      />
    );
  }
}
