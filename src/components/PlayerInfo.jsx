import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const PlayerInfo = ({ player }) => {
  const {
    username, colour, developmentCards, resourcesCards, victoryPoints, lastGained,
  } = player;

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Player:
          </th>
          <th>
            {username}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Victory Points:
          </td>
          <td>
            {victoryPoints}
          </td>
        </tr>
        <tr>
          <td>
            Colour:
          </td>
          <td>
            {colour}
          </td>
        </tr>
        <tr>
          <td>
            Development Cards:
          </td>
          <td>
            {developmentCards}
          </td>
        </tr>
        <tr>
          <td>
            Resources:
          </td>
          <td>
            {resourcesCards}
          </td>
        </tr>
        <tr>
          <td>
            Gained:
          </td>
          <td>
            {lastGained.join(', ')}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};


export default PlayerInfo;

PlayerInfo.propTypes = {
  player: PropTypes.shape({
    username: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    developmentCards: PropTypes.number.isRequired,
    resourcesCards: PropTypes.number.isRequired,
    victoryPoints: PropTypes.number.isRequired,
    lastGained: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
