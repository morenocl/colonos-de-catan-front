import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/* eslint-disable import/no-named-as-default */
import Actions from '../../containers/Actions/Actions';
import Board from '../../containers/Board/Board';
import Hand from '../../containers/Hand';
import Info from '../../containers/Info';
import ActionList from '../ActionList';
/* eslint-enable import/no-named-as-default */


const GameScreen = () => {
    var actions = [];
    const addAction = (action) => {actions.push(action)};
    const removeAction = (action) => {actions = actions.filter((a) => (action !== a))};
    return (
  <Container>
    <Row>
      <Col xs={10}>
        <Board />
      </Col>
      <Col xs={2}>
        <Info />
      </Col>
    </Row>

    <Row>
      <ActionList actions={actions} removeAction={removeAction} sendOut={() => {}} />
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
};

export default GameScreen;
