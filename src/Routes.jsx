import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppliedRoute from './nav/AppliedRoute';
import AuthRoute from './nav/AuthenticatedRoute';
import NotFound from './utils/NotFound';
import Rooms from './lobbies/LobbyList';
import Login from './login/LoginScreen';
import Signup from './signup/Signup';
import Landing from './utils/Landing';
import CreateRoom from './lobbies/CreateRoom';
import Waiting from './lobbies/Waiting';
import Game from './game/Game';


const Routes = ({ auth }) => (
  <Switch>
    {/* Always available. */}
    <AppliedRoute exact path="/" component={Landing} />
    <AppliedRoute exact path="/login" component={Login} />
    <AppliedRoute exact path="/signup" component={Signup} />

    {/* Only if authenticated. */}
    <AuthRoute exact auth={auth} path="/rooms" component={Rooms} />
    <AuthRoute exact auth={auth} path="/create" component={CreateRoom} />
    <AuthRoute exact auth={auth} path="/waiting" component={Waiting} />
    <AuthRoute exact auth={auth} path="/game" component={Game} />

    {/* Default. */}
    <AppliedRoute component={NotFound} />
  </Switch>
);

export default Routes;


Routes.propTypes = {
  auth: PropTypes.bool.isRequired,
};
