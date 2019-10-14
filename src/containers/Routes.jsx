import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateRoom from './Rooms/Create';
import Game from './Game';
import Login from './Login/Login';
import Rooms from './Rooms/Rooms';
import Signup from './Signup';
import Waiting from './Rooms/Waiting';

import ConditionalRoute from '../components/ConditionalRoute';
import Landing from '../components/Landing';
import NotFound from '../components/NotFound';


const mapStateToProps = (state) => ({
  auth: state.Auth.auth,
});

// Given a condition and a redirection url,
// converts a component (and its path) into a
// conditional route.
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

export const Routes = ({ auth }) => (
  <Switch>
    {/* Only if authenticated. */}
    {[{ auth, path: '/rooms', component: Rooms },
      { auth, path: '/create', component: CreateRoom },
      { auth, path: '/waiting', component: Waiting },
      { auth, path: '/game', component: Game },
    ].map(toCondRoute(auth, '/'))}

    {/* Only if not authenticated. */}
    {[{ path: '/', component: Landing },
      { path: '/login', component: Login },
      { path: '/signup', component: Signup },
    ].map(toCondRoute(!auth, '/rooms'))}

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
