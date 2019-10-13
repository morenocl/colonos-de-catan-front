import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateRoom from '../lobbies/CreateRoom';
import Game from '../game/Game';
import Login from '../login/Login';
import Rooms from '../lobbies/LobbyList';
import Signup from '../signup/Signup';
import Waiting from '../lobbies/Waiting';

import ConditionalRoute from '../components/ConditionalRoute';
import Landing from '../components/Landing';
import NotFound from '../components/NotFound';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});

const toCondRoute = (condition, redir) => (({ component, path }) => (
  <ConditionalRoute
    component={component}
    condition={condition}
    key={path}
    exact
    path={path}
    redir={redir}
  />
));

const Routes = ({ auth }) => (
  <Switch>
    {/* Always available. */}
    {[{ path: '/', component: Landing },
      { path: '/login', component: Login },
      { path: '/signup', component: Signup },
    ].map(toCondRoute(!auth, '/rooms'))}

    {/* Only if authenticated. */}
    {[{ auth, path: '/rooms', component: Rooms },
      { auth, path: '/create', component: CreateRoom },
      { auth, path: '/waiting', component: Waiting },
      { auth, path: '/game', component: Game },
    ].map(toCondRoute(auth, '/'))}

    {/* Default. */}
    <Route component={NotFound} />
  </Switch>
);

export default connect(mapStateToProps)(Routes);


toCondRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redir: PropTypes.string.isRequired,
};

Routes.propTypes = {
  auth: PropTypes.bool.isRequired,
};
