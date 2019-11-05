import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchRunning,
  dispatchError,
  dispatchRobberPayload,
} from './Actions.ducks';
import {
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../Game/Game.ducks';
import RobbingScreen from '../../components/Actions/Robbing';
import showHCenter from '../../components/Board/ShowHCenter';
import { colours } from '../../utils/Constants';
import { getGameStatus } from '../../utils/Mock';
import { HexagonPosition } from '../../utils/ApiTypes';


export const mapStateToProps = (state, ownProps) => {
  const { type } = ownProps;
  const action = state.Game.actions.find((a) => a && a.type === type);
  const { position, username } = state.Actions.robberPayload;

  return ({
    draw: state.Board.draw,
    payload: action.payload,
    position,
    username,
  });
};

export const mapDispatchToProps = {
  setError: dispatchError,
  setRunning: dispatchRunning,
  setGameRunning: dispatchGameRunning,
  setGameState: dispatchGameState,
  setRobberPayload: dispatchRobberPayload,
};

export const Robbing = (props) => {
  const {
    draw, payload, position, type, username,
  } = props;
  const { id } = useParams();
  const { setError, setRobberPayload, setRunning } = props;
  const { setGameRunning, setGameState } = props;

  // Clean previous states.
  useEffect(() => { setRobberPayload(null); }, [setRobberPayload]);

  const refresh = () => {
    setRunning();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };
  const onConfirm = () => {
    console.log('Confirm', type, position, username);
    refresh();
  };
  const onCancel = () => {
    console.log('Canceled');
    refresh();
  };

  // Shows all available robber positions.
  const showPositions = () => {
    const ps = payload.map((x) => x.position);
    const onClickMaker = (p) => () => { setRobberPayload(p, null); };
    showHCenter(draw, ps, colours.building, onClickMaker);
  };
  // Makes players clickable.
  const showPlayers = (players) => {
    console.log('Showing players');
    setRobberPayload(position, players[1]);
  };

  // First set a position. Then, show available players, if needed.
  if (!position) {
    showPositions();
  } else if (!username) {
    // Find available players for the chosen position.
    const { players } = payload.find((x) => (x
      && x.position.level === position.level
      && x.position.index === position.index));

    // If there's only one player, set it.
    if (players.length === 1) setRobberPayload(position, players[0]);

    // If there are more than one, show every one.
    if (players.length > 1) showPlayers(players);

    // If there are no available players, do nothing.
  }

  return (
    <RobbingScreen
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Robbing);


Robbing.propTypes = {
  position: HexagonPosition,
  username: PropTypes.string,
  draw: PropTypes.shape({}).isRequired,
  payload: PropTypes.arrayOf(PropTypes.exact({
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    position: HexagonPosition.isRequired,
  })).isRequired,
  setError: PropTypes.func.isRequired,
  setRobberPayload: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['move_robber', 'play_knight_card']).isRequired,
};

Robbing.defaultProps = {
  position: null,
  username: null,
};
