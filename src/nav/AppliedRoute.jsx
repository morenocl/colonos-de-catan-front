import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


// Renders the component C, passing props
const AppliedRoute = ({ component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    component={component}
  />
);

export default AppliedRoute;


AppliedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
