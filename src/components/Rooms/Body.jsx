import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


// Details of a room. If onClick is null,
// no button is shown.
const Body = (props) => {
  const {
    id, maxPlayers, owner, players,
  } = props;
  const { label, disabled, onClick } = props;

  const button = (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );

  return (
    <Accordion.Collapse eventKey={id}>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              {`Owner: ${owner}`}
            </Col>
          </Row>
          <Row>
            <Col>
              {`Players: ${players}`}
            </Col>
          </Row>
          <Row>
            <Col>
              {`Max players: ${maxPlayers}`}
            </Col>
          </Row>
          { onClick && button }
        </Container>
      </Card.Body>
    </Accordion.Collapse>
  );
};

export default Body;


Body.propTypes = {
  id: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  owner: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Body.defaultProps = {
  onClick: null,
};
