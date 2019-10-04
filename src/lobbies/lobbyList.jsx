import {
  Accordion, Button, Card,
} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

import { getLobbies } from '../utils/requests';


function LobbyDetails(props) {
  const { owner, players, maxPlayers } = props;
  const playerlist = players.reduce((x, y) => `${x}, ${y}`);

  return (
    <div>
      <div>{`Owner: ${owner}`}</div>
      <div>{`Players: ${playerlist}`}</div>
      <div>{`Max players: ${maxPlayers}`}</div>
    </div>
  );
}

function LobbyPreview(props) {
  const { lobby } = props;

  return (
    <Card key={lobby.id}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={lobby.id}>
          {lobby.name}
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey={lobby.id}>
        <Card.Body>
          <LobbyDetails
            owner={lobby.owner}
            players={lobby.players}
            maxPlayers={lobby.max_players}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default function LobbyList() {
  const lobbies = getLobbies();

  return (
    <Accordion>
      {lobbies.map((x) => <LobbyPreview lobby={x} key={x.id} />)}
    </Accordion>
  );
}


LobbyDetails.propTypes = {
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxPlayers: PropTypes.number.isRequired,
};

LobbyPreview.propTypes = {
  lobby: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    max_players: PropTypes.number.isRequired,
  }).isRequired,
};
