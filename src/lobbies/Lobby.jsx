import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { joinLobby } from '../utils/Api';
import Error from '../utils/Error';


export function LobbyDetails(props) {
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

export default function Lobby(props) {
  const { lobby } = props;

  // Initial details.
  const [page, setPage] = useState(
    <LobbyDetails
      owner={lobby.owner}
      players={lobby.players}
      maxPlayers={lobby.max_players}
      selected={() => joinLobby(lobby.id, () => setPage(<Error />))}
    />,
  );

  const header = (
    <Card.Header>
      <Accordion.Toggle
        as={Button}
        variant="link"
        eventKey={lobby.id}
      >
        {lobby.name}
      </Accordion.Toggle>
    </Card.Header>
  );

  const body = (
    <Accordion.Collapse eventKey={lobby.id}>
      <Card.Body>
        {page}
      </Card.Body>
    </Accordion.Collapse>
  );

  return (
    <Card key={lobby.id}>
      {header}
      {body}
    </Card>
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
