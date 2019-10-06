import React, { Component } from "react";
import NavBar from "./routing/Nav";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/// "un-reduxed" component, this ideally should be a container, with its own .ducks file
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      isAuthenticated: localStorage.getItem("token") ? true : false
    };
  }

  // updates the main state
  userHasAuthenticated = (authenticated, username, token) => {
    this.setState({
      isAuthenticated: authenticated,
      username: username
    });
    localStorage.setItem("token", token);
  };

  // for our app, to be "logged out" is to remove the token
  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      username: ""
    });
    localStorage.removeItem("token");
  };

  // App just loads the navbar (that we could remove)
  // and the Routes component, that defines the logic to move between pages
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App">
        <NavBar
          isAuthenticated={this.state.isAuthenticated}
          handleLogout={this.handleLogout}
        />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
