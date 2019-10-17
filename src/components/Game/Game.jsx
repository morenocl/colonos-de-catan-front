import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Actions from '../../containers/Actions';
import Board from '../../containers/Board/Board';
import Hand from '../../containers/Hand';
import Info from '../../containers/Info';


const GameScreen = () => (
  <Container>
    <Row>
      <Col xs={9}>
        <Board />
      </Col>
      <Col xs={3}>
        <Info />
      </Col>
    </Row>

    <Row>
      <Col>
        <Hand />
      </Col>
      <Col>
        <Actions />
      </Col>
    </Row>
  </Container>
);

export default GameScreen;
