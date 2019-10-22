import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const counter = (list, string) => {
  let count = 0;
  list.forEach((element) => {
    if (element === string) {
      count += 1;
    }
  });
  return count;
};

export const resToTable = (resources) => {
  const lumber = counter(resources, 'lumber');
  const wool = counter(resources, 'wool');
  const ore = counter(resources, 'ore');
  const grain = counter(resources, 'grain');
  const brick = counter(resources, 'brick');

  return (
    <tbody>
      <tr>
        <td>
        Resources
        </td>
      </tr>
      <tr>
        <td>lumber: </td>
        <td>{lumber}</td>
      </tr>
      <tr>
        <td>wool: </td>
        <td>{wool}</td>
      </tr>
      <tr>
        <td>ore: </td>
        <td>{ore}</td>
      </tr>
      <tr>
        <td>grain: </td>
        <td>{grain}</td>
      </tr>
      <tr>
        <td>brick: </td>
        <td>{brick}</td>
      </tr>
    </tbody>
  );
};

export const cardsToTable = (cards) => {
  const roadBuilding = counter(cards, 'road_building');
  const yearOfPlenty = counter(cards, 'year_of_plenty');
  const monopoly = counter(cards, 'monopoly');
  const victoryPoint = counter(cards, 'victory_point');
  const knight = counter(cards, 'knight');

  return (
    <tbody>
      <tr>
        <td>
        Cards
        </td>
      </tr>
      <tr>
        <td>road_building: </td>
        <td>{roadBuilding}</td>
      </tr>
      <tr>
        <td>year_of_plenty: </td>
        <td>{yearOfPlenty}</td>
      </tr>
      <tr>
        <td>monopoly: </td>
        <td>{monopoly}</td>
      </tr>
      <tr>
        <td>victory_point: </td>
        <td>{victoryPoint}</td>
      </tr>
      <tr>
        <td>knight: </td>
        <td>{knight}</td>
      </tr>
    </tbody>
  );
};


const Hand = ({ cards, resources }) => (
  <Container>
    <Row>
      <Col>
        <Table>
          {resToTable(resources)}
        </Table>
      </Col>
      <Col>
        <Table>
          {cardsToTable(cards)}
        </Table>
      </Col>

    </Row>
  </Container>
);

export default Hand;


Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
};
