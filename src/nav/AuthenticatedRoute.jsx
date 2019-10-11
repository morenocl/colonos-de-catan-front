import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


// Renders C if user is authenticated.
// Otherwise, redirects to login.
const AuthenticatedRoute = ({ auth, component: C, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={(props) => (
      auth
      // eslint-disable-next-line react/jsx-props-no-spreading
        ? <C {...props} />
        : (
          <Redirect
            to="/login"
          />
        ))}
  />
);

export default AuthenticatedRoute;


AuthenticatedRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};
