import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
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

const resToTable = (resources) => (

  <Table variant="dark">
    <thead>
      <tr>
        <th>
        Recursos
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
            lumber:
          { counter(resources, 'lumber') }
        </th>
        <th>
          wool:
          { counter(resources, 'wool') }
        </th>
        <th>
          ore:
          { counter(resources, 'ore') }
        </th>
        <th>
          grain:
          { counter(resources, 'grain') }
        </th>
        <th>
          brick:
          { counter(resources, 'brick') }
        </th>
      </tr>
    </tbody>
  </Table>
);

const cardsToTable = (cards) => (

  <Table variant="dark">
    <thead>
      <tr>
        <th>
          Cartas
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          road_building:
          { counter(cards, 'road_building') }
        </th>
        <th>
          year_of_plenty:
          { counter(cards, 'year_of_plenty') }
        </th>
        <th>
          monopoly:
          { counter(cards, 'monopoly') }
        </th>
        <th>
          victory_point:
          { counter(cards, 'victory_point') }
        </th>
        <th>
          knight:
          { counter(cards, 'knight') }
        </th>
      </tr>
    </tbody>
  </Table>
);


export default function Hand({ cards, resources }) {
  return (
    <Container>
      <Row>
        <Col>
          {resToTable(resources)}
        </Col>
        <Col>
          {cardsToTable(cards) }
        </Col>
      </Row>
    </Container>
  );
}


Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
};
