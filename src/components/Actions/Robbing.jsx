import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const Robbing = ({ onCancel, onConfirm }) => {
  const head = (
    <Row><Col><h1>Please choose a position</h1></Col></Row>
  );

  const body = (
    <Row>
      <Col>
        <Button onClick={onConfirm}>
          Confirm
        </Button>
      </Col>
      <Col>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </Col>
    </Row>

  );

  return (
    <Container>
      {head}
      {body}
    </Container>
  );
};

export default Robbing;


Robbing.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
