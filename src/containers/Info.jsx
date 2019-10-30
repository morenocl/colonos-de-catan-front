import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameInfo from '../components/GameInfo';
import PlayerInfo from '../components/PlayerInfo';
import { InfoType } from '../utils/ApiTypes';
import { dispatchOnClick } from './Info.ducks';

const mapStateToProps = (state) => ({
  players: state.Game.info.players,
  turn: state.Game.info.currentTurn,
  winner: state.Game.info.winner,
});

const mapDispatchToProps = ({
  setOnClick: dispatchOnClick,
});

const playerOnClick = () => ((player) => () => (() => { console.log(`Clicked by:${player.username}`); }));

export const Info = (props) => {
  const {
    players, turn, winner, setOnClick,
  } = props;

  setOnClick(playerOnClick());

  return (
    <div>
      {players.map((player) => <PlayerInfo player={player} key={player.username} />)}
      <GameInfo turn={turn} winner={winner} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);

mapStateToProps.propTypes = {
  state: InfoType,
};

Info.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  turn: PropTypes.shape({}).isRequired,
  winner: PropTypes.string,
  setOnClick: PropTypes.func.isRequired,
};

Info.defaultProps = {
  winner: null,
};
