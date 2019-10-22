import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const GameInfo = (turn, winner) => {
  const win = winner
    ? (
      <Table>
        <tr>
          <td>
            Winner:
          </td>
          <td>
            {winner}
          </td>
        </tr>
      </Table>
    )
    : undefined;

  return (
    win
    || (
    <Table>
      <tbody>
        <tr>
          <td>
            Turn:
          </td>
          <td>
            {turn.user}
          </td>
        </tr>
        <tr>
          <td>
            Dice:
          </td>
          <td>
            {turn.dice}
          </td>
        </tr>
      </tbody>
    </Table>
    )
  );
};

export default GameInfo;


GameInfo.propType = {
  turn: PropTypes.shape({
    user: PropTypes.string.isRequired,
    dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  winner: PropTypes.string,
};
