import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameStatus from '../../components/Info/GameStatus';
import PlayerInfo from '../../components/Info/PlayerInfo';
import { InfoType } from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  players: state.Game.info.players,
  turn: state.Game.info.currentTurn,
  winner: state.Game.info.winner,
  playerOnClick: state.Info.playerOnClick,
});

export const Info = (props) => {
  const {
    players, turn, winner, playerOnClick,
  } = props;

  return (
    <div>
      {players.map((player) => (
        <PlayerInfo
          player={player}
          key={player.username}
          playerOnClick={playerOnClick(player)}
        />
      ))}
      <GameStatus turn={turn} winner={winner} />
    </div>
  );
};

export default connect(mapStateToProps)(Info);

mapStateToProps.propTypes = {
  state: InfoType,
};

Info.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  turn: PropTypes.shape({}).isRequired,
  winner: PropTypes.string,
  playerOnClick: PropTypes.func.isRequired,
};

Info.defaultProps = {
  winner: null,
};
