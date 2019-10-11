import React from 'react';
import Alert from 'react-bootstrap/Alert';


const NotFound = () => (
  <Alert variant="danger">
    <Alert.Heading>
        Error: Not found
    </Alert.Heading>
      The requested resource could not be found.
  </Alert>
);

export default NotFound;
