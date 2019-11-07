import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const Robbing = ({ onCancel, onConfirm }) => {
  const head = (
    <Row>
      <Col>
        <h1 data-testid="actions-robbing-head">
      Please choose a position and a player
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
          data-testid="actions-robbing-confirm"
        >
          Confirm
        </Button>
      </Col>
      <Col>
        <Button
          onClick={onCancel}
          data-testid="actions-robbing-cancel"
        >
          Cancel
        </Button>
      </Col>
    </Row>

  );

  return (
    <Container data-testid="actions-robbing">
      {head}
      {body}
    </Container>
  );
};

export default Robbing;


Robbing.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
};

Robbing.defaultProps = {
  onConfirm: null,
};
