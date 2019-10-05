import {
  Accordion, Button, Card,
} from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { joinLobby } from '../utils/api';


function LobbyDetails(props) {
  const {
    owner, players, maxPlayers, selected,
  } = props;
  const playerlist = players.reduce((x, y) => `${x}, ${y}`);
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    selected();
  };

  return (
    <div>
      <div>{`Owner: ${owner}`}</div>
      <div>{`Players: ${playerlist}`}</div>
      <div>{`Max players: ${maxPlayers}`}</div>
      <Button
        variant="primary"
        onClick={handleClick}
        disabled={isLoading}
      >
        Join
      </Button>
    </div>
  );
}

function Lobby(props) {
  const { lobby } = props;

  return (
    <Card key={lobby.id}>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={lobby.id}
        >
          {lobby.name}
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey={lobby.id}>
        <Card.Body>
          <LobbyDetails
            owner={lobby.owner}
            players={lobby.players}
            maxPlayers={lobby.max_players}
            selected={() => joinLobby(lobby.id)}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default function LobbyList(props) {
  const { lobbies } = props;

  return (
    <Accordion>
      {lobbies.map((x) => <Lobby lobby={x} key={x.id} />)}
    </Accordion>
  );
}


LobbyDetails.propTypes = {
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxPlayers: PropTypes.number.isRequired,
  selected: PropTypes.func.isRequired,
};

Lobby.propTypes = {
  lobby: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    max_players: PropTypes.number.isRequired,
  }).isRequired,
};

LobbyList.propTypes = {
  lobbies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    max_players: PropTypes.number.isRequired,
  })).isRequired,
};
