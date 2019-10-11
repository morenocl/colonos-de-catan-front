import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

import * as actions from '../App.ducks';


const mapStateToProps = (state) => ({
  auth: state.App.auth,
});

const NavBar = ({ auth, logout }) => {
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

  return (
    <Navbar>
      <Navbar.Brand>
        {auth
          ? (
            <LinkContainer to="/">
              <Nav.Link>
                Lobbies
              </Nav.Link>
            </LinkContainer>
          )
          : 'TodoApp'}
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav>
          {auth
            ? <Nav.Item onClick={logout}>Logout</Nav.Item>
            : items}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  mapStateToProps,
  actions,
)(NavBar);


mapStateToProps.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
  }).isRequired,
};

NavBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};
