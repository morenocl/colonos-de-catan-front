import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import PropTypes from "prop-types";

// lots of Bootstrap code here
// Notice the use of <Fragment> to avoid adding useless <div>s
function NavBar(props) {
  const { isAuthenticated, handleLogout } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Nav>
        {isAuthenticated ? (
          <>
            <Nav.Link href="/cards">Cards</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/board">Boards</Nav.Link>
            <Nav.Link href="/lobbys">Lobbys</Nav.Link>
          </>
        ) : (
          <NavItem>DemoApp</NavItem>
        )}
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default NavBar;
