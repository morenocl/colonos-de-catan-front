import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppliedRoute from './nav/AppliedRoute';
import AuthenticatedRoute from './nav/AuthenticatedRoute';
import NotFound from './utils/NotFound';
import Rooms from './lobbies/LobbyList';
import Login from './login/LoginScreen';
import Signup from './signup/Signup';
import Landing from './utils/Landing';
import CreateRoom from './lobbies/CreateRoom';
import Waiting from './lobbies/Waiting';
import Game from './game/Game';


const toAppliedRoute = ({ path, component }) => (
  <AppliedRoute
    exact
    path={path}
    component={component}
    key={path}
  />
);

const toAuthRoute = ({ auth, path, component }) => (
  <AuthenticatedRoute
    exact
    auth={auth}
    path={path}
    component={component}
    key={path}
  />
);

const Routes = ({ auth }) => (
  <Switch>
    {/* Always available. */}
    {[{ path: '/', component: Landing },
      { path: '/login', component: Login },
      { path: '/signup', component: Signup },
    ].map(toAppliedRoute)}

    {/* Only if authenticated. */}
    {[{ auth, path: '/rooms', component: Rooms },
      { auth, path: '/create', component: CreateRoom },
      { auth, path: '/waiting', component: Waiting },
      { auth, path: '/game', component: Game },
    ].map(toAuthRoute)}

    {/* Default. */}
    <AppliedRoute component={NotFound} />
  </Switch>
);

export default Routes;


toAppliedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

toAuthRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

Routes.propTypes = {
  auth: PropTypes.bool.isRequired,
};
