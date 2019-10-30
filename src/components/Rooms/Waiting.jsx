import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { RoomType } from '../../utils/ApiTypes';


export const Waiting = ({ room, onClick }) => {
  const {
    // eslint-disable-next-line camelcase
    max_players, name, owner, players,
  } = room;

  const head = (
    <thead>
      <tr>
        <th colSpan="2">{name}</th>
      </tr>
    </thead>
  );

  const body = (
    <tbody>
      <tr>
        <td>{`Owner: ${owner}`}</td>
      </tr>
      <tr>
        <td>{`Players: ${players.join(', ')}`}</td>
      </tr>
      <tr>
        {/* eslint-disable-next-line camelcase */}
        <td>{`Max players: ${max_players}`}</td>
      </tr>
    </tbody>
  );

  return (
    <div>
      <Table borderless size="sm">
        {head}
        {body}
      </Table>

      <Button disabled={!onClick} onClick={onClick}>
        Start game
      </Button>
    </div>
  );
};

export default Waiting;

Waiting.propTypes = {
  room: RoomType.isRequired,
  onClick: PropTypes.func,
};

Waiting.defaultProps = {
  onClick: null,
};
