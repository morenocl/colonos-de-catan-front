import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Waiting = ({ room, onClick, }) => {
    const { max_players, name, owner, players } = room;

    return (
      <div>
        <Container>
          <Row>
            <Col>
              {name}
            </Col>
          </Row>
          <Row>
            <Col>
              Propietario: {owner}
            </Col>
          </Row>
          <Row>
            <Col>
              Maximo jugadores: {max_players}
            </Col>
          </Row>
          <Row>
            <Col>
              Jugadores: {players.join(", ")}
            </Col>
          </Row>
        </Container>
        <Button disabled={!onClick} onClick={onClick}>
          Start game
        </Button>
      </div>
    );
  };

  export default Waiting;