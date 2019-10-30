import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import { colourCard } from '../utils/Constants';


const PlayerInfo = ({ player }) => {
  const {
    username, colour, developmentCards, resourcesCards, victoryPoints, lastGained,
  } = player;

  return (
    <Card bg={colourCard[colour]}>
      <Card.Title>
        {username}
      </Card.Title>
      <Card.Body>
        <Table responsive size="sm">
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
            Dev Cards:
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
      </Card.Body>
    </Card>
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
