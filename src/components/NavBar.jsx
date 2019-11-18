import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';


const NavBar = ({ auth, logout }) => {
  const items = (
    <>
      <LinkContainer to="/signup">
        <Button data-testid="nav-bar-signup-button">Signup</Button>
      </LinkContainer>
      <LinkContainer to="/login">
        <Button data-testid="nav-bar-login-button">Login</Button>
      </LinkContainer>
    </>
  );

  const logoutButton = (
    <LinkContainer to="/">
      <Button onClick={logout} data-testid="nav-bar-logout-button">
        Logout
      </Button>
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

export default NavBar;


NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};
