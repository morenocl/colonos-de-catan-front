import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const PlayerInfo = ({ player, onTurn, playerOnClick }) => {
  const {
    username, colour, developmentCards, resourcesCards, victoryPoints, lastGained,
  } = player;


  return (
    <Card
      data-testid="card"
      style={{
        borderColor: colour,
        backgroundColor: onTurn ? colour : 'white',
        fontWeight: onTurn ? 'bold' : 'normal',
      }}
    >
      <Card.Title>
        <Button
          block
          variant="link"
          disabled={!playerOnClick}
          onClick={playerOnClick}
        >
          Player:
          {username}
        </Button>
      </Card.Title>
      <Table>
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
  onTurn: PropTypes.bool.isRequired,
  playerOnClick: PropTypes.func.isRequired,
};
