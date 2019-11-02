import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { RoomType } from '../../utils/ApiTypes';


export const Waiting = ({ room, onStart, onCancel }) => {
  const {
    // eslint-disable-next-line camelcase
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
              {/* eslint-disable-next-line camelcase */}
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
      <Button disabled={!onStart} onClick={onStart} className='start'>
        Start game
      </Button>
      <Button disabled={!onCancel} onClick={onCancel} className='cancel'>
        Cancel Room
      </Button>
    </div>
  );
};

export default Waiting;

Waiting.propTypes = {
  room: RoomType.isRequired,
  onStart: PropTypes.func,
  onCancel: PropTypes.func,
};

Waiting.defaultProps = {
  onStart: null,
  onCancel: null,
};
