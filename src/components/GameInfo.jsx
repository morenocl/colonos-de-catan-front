import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const GameInfo = ({ turn, winner }) => {
  if (winner) {
    return (
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
    );
  }

  return (
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
            {turn.dice[0]}
              ,
            {turn.dice[1]}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GameInfo;


GameInfo.propTypes = {
  turn: PropTypes.shape({
    user: PropTypes.string.isRequired,
    dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  winner: PropTypes.string,
};

GameInfo.defaultProps = {
  winner: null,
};
