import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dispatchRunning, dispatchError } from './Actions.ducks';
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

  return ({
    draw: state.Board.draw,
    payload: action.payload,
  });
};

export const mapDispatchToProps = {
  setError: dispatchError,
  setRunning: dispatchRunning,
  setGameRunning: dispatchGameRunning,
  setGameState: dispatchGameState,
};

export const Robbing = (props) => {
  const { setError, setRunning } = props;
  const { setGameRunning, setGameState } = props;
  const { draw, payload } = props;
  const { id } = useParams();

  const refresh = () => {
    setRunning();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };

  useEffect(() => {
    const ps = payload.map((x) => x.position);
    const onClickMaker = (p) => () => { console.log(p); };
    showHCenter(draw, ps, colours.building, onClickMaker);
  }, [draw, payload]);

  return (
    <RobbingScreen
      onCancel={refresh}
      onConfirm={refresh}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Robbing);


Robbing.propTypes = {
  draw: PropTypes.shape({}).isRequired,
  payload: PropTypes.arrayOf(PropTypes.exact({
    players: PropTypes.arrayOf(PropTypes.string).isRequired,
    position: HexagonPosition.isRequired,
  })).isRequired,
  setError: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};
