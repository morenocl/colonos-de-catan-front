import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameInfo from '../components/GameInfo';
import PlayerInfo from '../components/PlayerInfo';
import { InfoType } from '../utils/ApiTypes';


const mapStateToProps = (state) => ({
  players: state.Game.info.players,
  current_turn: state.Game.info.current_turn,
  winner: state.Game.info.winner,
});

export const Info = (props) => {
  const { players, current_turn, winner } = props;

  return (
    <div>
      { players.map((player) => <PlayerInfo player={player} />) }
      <GameInfo turn={current_turn} winner={winner} />
    </div>
  );
};

export default connect(mapStateToProps)(Info);

mapStateToProps.propTypes = {
  state: InfoType,
};

Info.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  current_turn: PropTypes.shape({}).isRequired,
  winner: PropTypes.string,
};
