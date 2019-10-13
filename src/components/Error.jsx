import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';


const Error = ({ message }) => (
  <Alert variant="danger">
    <Alert.Heading>
        Error
    </Alert.Heading>
    { message }
  </Alert>
);

export default Error;


Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: `There was an error requesting data from server.
            Check your internet connection.`,
};
