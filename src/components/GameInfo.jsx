import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';


const GameInfo = (turn, winner) => {
  const win = winner
    ? (
      <Row>
        <Col>
          Winner:
        </Col>
        <Col>
          {winner}
        </Col>
      </Row>
    )
    : undefined;

  return (
    win
    || (
    <Card>
      <Row>
        <Col>
          Turn:
        </Col>
        <Col>
          {turn.user}
        </Col>
      </Row>
      <Row>
        <Col>
          Dice:
        </Col>
        <Col>
          {turn.dice}
        </Col>
      </Row>
    </Card>
    )
  );
};

export default GameInfo;


GameInfo.propType = {
  turn: PropTypes.shape({
    user: PropTypes.string.isRequired,
    dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  winner: PropTypes.string,
};
