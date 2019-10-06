import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './routing/AppliedRoute';
import AuthenticatedRoute from './routing/AuthenticatedRoute';
import NotFound from './routing/NotFound';
import Login from './login/Login';
import Cards from './game/Cards';
import Resources from './game/Resources';
import Board from './game/Board';
import Lobbys from './lobbies/Lobbys';

// we use custom 'route' components (instead of Route)
// to pass auth logic to different routes
// read the docs for react-router
export default ({ childProps }) =>
  <Switch>
    <AuthenticatedRoute path="/cards" exact component={Cards} props={childProps} />
    <AuthenticatedRoute path="/resources" exact component={Resources} props={childProps} />
    <AuthenticatedRoute path="/board" exact component={Board} props={childProps} />
    <AuthenticatedRoute path="/lobbys" exact component={Lobbys} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route component={NotFound} />
</Switch>;
