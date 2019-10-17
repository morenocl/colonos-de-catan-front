import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const Body = ({
  id, loading, maxPlayers, onClick, owner, players,
}) => (
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
        <Button
          variant="primary"
          onClick={onClick}
          disabled={loading}
        >
        Join
        </Button>
      </Container>
    </Card.Body>
  </Accordion.Collapse>
);

export default Body;


Body.propTypes = {
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired,
};
