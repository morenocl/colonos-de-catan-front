import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

import { RoomType } from '../../utils/ApiTypes';
import Header from './Header';
// eslint-disable-next-line import/no-named-as-default
import Body from '../../containers/Rooms/Body';


const Rooms = ({ rooms, onClick }) => (
  <div>
    <Accordion>
      {rooms.map(({
        // eslint-disable-next-line camelcase
        id, max_players, name, owner, players, game_has_started,
      }) => (
        <Card key={id}>
          <Header
            id={id}
            name={name}
          />
          <Body
            id={id}
            // eslint-disable-next-line camelcase
            maxPlayers={max_players}
            owner={owner}
            players={players}
            // eslint-disable-next-line camelcase
            gameHasStarted={game_has_started}
          />
        </Card>
      ))}
    </Accordion>
    <Button
      variant="primary"
      onClick={onClick}
    >
      Create
    </Button>
  </div>
);

export default Rooms;


Rooms.propTypes = {
  rooms: PropTypes.arrayOf(RoomType).isRequired,
  onClick: PropTypes.func.isRequired,
};
