import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { RoomType } from '../../utils/ApiTypes';


export const Waiting = ({ room, onClick }) => {
  const {
    max_players, name, owner, players,
  } = room;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th colSpan="2">
              {name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Owner:
            </td>
            <td>
              {owner}
            </td>
          </tr>
          <tr>
            <td>
              Max Players:
            </td>
            <td>
              {max_players}
            </td>
          </tr>
          <tr>
            <td>
              Players:
            </td>
            <td>
              {players.join(', ')}
            </td>
          </tr>
        </tbody>
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
