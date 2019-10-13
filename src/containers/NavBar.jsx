import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from './Auth.ducks';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});

const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

const NavBar = ({ auth, setAuth }) => {
  const logout = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  const items = (
    <>
      <LinkContainer to="/signup">
        <Nav.Link>Signup</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
  );

  const logoutButton = (
    <LinkContainer to="/">
      <Nav.Item onClick={logout}>
        Logout
      </Nav.Item>
    </LinkContainer>
  );

  return (
    <Navbar>
      <Navbar.Brand>
        <h1>Settlers of Catan</h1>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav>
          {auth ? logoutButton : items}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);


mapStateToProps.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
  }).isRequired,
};

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  setAuth: PropTypes.func.isRequired,
};
