import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './PlayerInfo.css';


const PlayerInfo = ({ player, playerOnClick }) => {
  const {
    username, colour, developmentCards, resourcesCards, victoryPoints, lastGained,
  } = player;


  return (
    <a className="card-clickable" onClick={playerOnClick}>
      <Card>
        <Card.Title>
          Player:
          {username}
        </Card.Title>
        <table className="card-table table">
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
        </table>
      </Card>
    </a>
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
  playerOnClick: PropTypes.func.isRequired,
};
