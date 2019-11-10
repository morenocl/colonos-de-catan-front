import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const Building = ({ onCancel, onConfirm }) => {
  const head = (
    <Row>
      <Col>
        <h1 data-testid="actions-building-head">
      Please choose a position
        </h1>
      </Col>
    </Row>
  );

  const body = (
    <Row>
      <Col>
        <Button
          disabled={!onConfirm}
          onClick={onConfirm}
          data-testid="actions-building-confirm"
        >
          Confirm
        </Button>
      </Col>
      <Col>
        <Button
          onClick={onCancel}
          data-testid="actions-building-cancel"
        >
          Cancel
        </Button>
      </Col>
    </Row>

  );

  return (
    <Container data-testid="actions-building">
      {head}
      {body}
    </Container>
  );
};

export default Building;


Building.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
};

Building.defaultProps = {
  onConfirm: null,
};
