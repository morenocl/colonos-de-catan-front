import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppliedRoute from './nav/AppliedRoute';
import AuthenticatedRoute from './nav/AuthenticatedRoute';
import NotFound from './utils/NotFound';
import LobbyList from './lobbies/LobbyList';
import LoginScreen from './login/LoginScreen';


const Routes = ({ auth }) => (
  <Switch>
    <AuthenticatedRoute path="/" exact auth={auth} component={LobbyList} />
    <AppliedRoute path="/login" exact component={LoginScreen} />
    <AppliedRoute component={NotFound} />
  </Switch>
);

export default Routes;


Routes.propTypes = {
  auth: PropTypes.bool.isRequired,
};
