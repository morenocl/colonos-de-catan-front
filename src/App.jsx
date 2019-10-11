import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LobbyList from './lobbies/LobbyList';
import Board from './board/Board';
import * as actions from './App.ducks';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const mapStateToProps = (state) => ({
  auth: state.App.auth,
  username: state.App.username,
});

function App() {
  return (
    <div>
      <LobbyList />
      <Board id={1} />
    </div>
  );
}


export default connect(
  mapStateToProps,
  actions,
)(App);


mapStateToProps.propTypes = {
  state: PropTypes.shape({
    auth: PropTypes.bool,
    username: PropTypes.string,
  }).isRequired,
};
