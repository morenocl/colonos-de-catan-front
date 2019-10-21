import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const PlayerInfo = ({ player }) => {
  const {
    username, colour, development_cards, resources_cards, last_gained,
  } = player;

  return (
    <Card>
      <Card.Title>
        Jugador:
        {username}
      </Card.Title>
      <Card.Body>
        <Row>
          <Col>
            color:
          </Col>
          <Col>
            {colour}
          </Col>
        </Row>
        <Row>
          <Col>
            Desarrollo:
          </Col>
          <Col>
            {development_cards.join(', ')}
          </Col>
        </Row>
        <Row>
          <Col>
            Recursos:
          </Col>
          <Col>
            {resources_cards.join(', ')}
          </Col>
        </Row>
        <Row>
          <Col>
            Obtuvo:
          </Col>
          <Col>
            {last_gained.join(', ')}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export default PlayerInfo;

PlayerInfo.propTypes = {
  player: PropTypes.shape({
    username: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    development_cards: PropTypes.number.isRequired,
    resources_cards: PropTypes.number.isRequired,
    last_gained: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
