import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAuth as dispatchAuth } from './App.ducks';
import Routes from './Routes';
import NavBar from './nav/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const mapStateToProps = (state) => ({
  auth: state.App.auth,
});

const mapDispatchToProps = ({
  setAuth: dispatchAuth,
});

const App = ({ auth, setAuth }) => {
  const logout = () => {
    setAuth(false);
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <NavBar
        logout={logout}
      />
      <Routes auth={auth} />
    </div>
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


App.propTypes = {
  auth: PropTypes.bool.isRequired,
  setAuth: PropTypes.func.isRequired,
};

mapStateToProps.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
  }).isRequired,
};
