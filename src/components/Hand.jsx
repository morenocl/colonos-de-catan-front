import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function counter(list, string) {
  let count = 0;
  list.forEach((element) => {
    if (element === string) {
      count += 1;
    }
  });
  return count;
}

const resToTable = (resources) => {
  const lumber = counter(resources, 'lumber');
  const wool = counter(resources, 'wool');
  const ore = counter(resources, 'ore');
  const grain = counter(resources, 'grain');
  const brick = counter(resources, 'brick');

  return (
    <Container>
      <Row>Recursos</Row>
      <Row>
        <Col>lumber: </Col>
        <Col>{lumber}</Col>
      </Row>
      <Row>
        <Col>wool: </Col>
        <Col>{wool}</Col>
      </Row>
      <Row>
        <Col>ore: </Col>
        <Col>{ore}</Col>
      </Row>
      <Row>
        <Col>grain: </Col>
        <Col>{grain}</Col>
      </Row>
      <Row>
        <Col>brick: </Col>
        <Col>{brick}</Col>
      </Row>
    </Container>
  );
};

const cardsToTable = (cards) => {
  const roadBuilding = counter(cards, 'road_building');
  const yearOfPlenty = counter(cards, 'year_of_plenty');
  const monopoly = counter(cards, 'monopoly');
  const victoryPoint = counter(cards, 'victory_point');
  const knight = counter(cards, 'knight');

  return (
    <Container>
      <Row>Cards</Row>
      <Row>
        <Col>road_building: </Col>
        <Col>{roadBuilding}</Col>
      </Row>
      <Row>
        <Col>year_of_plenty: </Col>
        <Col>{yearOfPlenty}</Col>
      </Row>
      <Row>
        <Col>monopoly: </Col>
        <Col>{monopoly}</Col>
      </Row>
      <Row>
        <Col>victory_point: </Col>
        <Col>{victoryPoint}</Col>
      </Row>
      <Row>
        <Col>knight: </Col>
        <Col>{knight}</Col>
      </Row>
    </Container>
  );
};


export default function Hand({ cards, resources }) {
  return (
    <Container>
      <Row>
        <Col>
          {resToTable(resources)}
        </Col>
        <Col>
          {cardsToTable(cards)}
        </Col>
      </Row>
    </Container>
  );
}


Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
};
