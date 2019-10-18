import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';


const Error = ({ message, onClose }) => (
  <Alert
    variant="danger"
    dismissible={!!onClose}
    onClose={onClose}
  >
    <Alert.Heading>
        Error
    </Alert.Heading>
    { message }
  </Alert>
);

export default Error;


Error.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};

Error.defaultProps = {
  message: `There was an error requesting data from server.
            Check your internet connection.`,
  onClose: null,
};
