import PropTypes from 'prop-types';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { roomType } from '../../containers/Rooms/Rooms.ducks';
import Header from './Header';
import Body from '../../containers/Rooms/Body';


const Rooms = ({ rooms }) => (
  <Accordion>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {rooms.map(({
      id, max_players, name, owner, players,
    }) => (
      <Card key={id}>
        <Header
          id={id}
          name={name}
        />
        <Body
          id={id}
          maxPlayers={max_players}
          owner={owner}
          players={players}
        />
      </Card>
    ))}
  </Accordion>
);

export default Rooms;


Rooms.propTypes = {
  rooms: PropTypes.arrayOf(roomType).isRequired,
};
