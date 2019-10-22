import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const PlayerInfo = ({ player }) => {
  const {
    username, colour, developmentCards, resourcesCards, victoryPoints, lastGained,
  } = player;

  return (
    <Card>
      <Card.Title>
        Player:
        {username}
      </Card.Title>
      <Card.Body>
        <Row>
          <Col>
            Victory Points:
          </Col>
          <Col>
            {victoryPoints}
          </Col>
        </Row>
        <Row>
          <Col>
            Colour:
          </Col>
          <Col>
            {colour}
          </Col>
        </Row>
        <Row>
          <Col>
            Development Cards:
          </Col>
          <Col>
            {developmentCards.join(', ')}
          </Col>
        </Row>
        <Row>
          <Col>
            Resources:
          </Col>
          <Col>
            {resourcesCards.join(', ')}
          </Col>
        </Row>
        <Row>
          <Col>
            Gained:
          </Col>
          <Col>
            {lastGained.join(', ')}
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
    developmentCards: PropTypes.number.isRequired,
    resourcesCards: PropTypes.number.isRequired,
    victoryPoints: PropTypes.number.isRequired,
    lastGained: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
