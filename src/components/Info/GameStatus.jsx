import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const GameStatus = ({ turn, winner }) => {
  if (winner) {
    return (
      <Table borderless size="sm">
        <tbody>
          <tr>
            <td>Winner:</td>
            <td data-testid="winner">{winner}</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <Table borderless size="sm">
      <tbody>
        <tr>
          <td>Dice:</td>
          <td data-testid="dice">
            {`${turn.dice[0]}, ${turn.dice[1]}`}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GameStatus;


GameStatus.propTypes = {
  turn: PropTypes.shape({
    user: PropTypes.string.isRequired,
    dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  winner: PropTypes.string,
};

GameStatus.defaultProps = {
  winner: null,
};
