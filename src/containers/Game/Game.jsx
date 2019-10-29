import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as dispatchObj from './Game.ducks';
import Error from '../../components/Error';
import GameScreen from '../../components/Game/Game';
import { GameStateType } from '../../utils/ApiTypes';
import { getGameStatus } from '../../utils/Mock';
import useInterval from '../../utils/UseInterval';


const mapStateToProps = (state) => ({
  actions: state.Game.actions,
  board: state.Game.board,
  hand: state.Game.hand,
  info: state.Game.info,
  stage: state.Game.stage,
});

export const Game = (props) => {
  const { stage } = props;
  const {
    setError, setRunningStage,
  } = props;
  const { id } = useParams();

  // Fetch data from API.
  const refresh = () => {
    getGameStatus(id, setRunningStage, setError);
  };

  // Refresh every 5 seconds.
  useInterval(() => { if (stage !== 'frozen') refresh(); }, 5000);

  if (stage === 'empty') return (<></>);

  if (stage === 'error') return (<Error />);

  return (
    <GameScreen />
  );
};

export default connect(mapStateToProps, dispatchObj)(Game);


mapStateToProps.propTypes = {
  state: GameStateType,
};

Game.propTypes = PropTypes.shape({
  stage: PropTypes.string,
  setError: PropTypes.func,
  setRunningStage: PropTypes.func,
}).isRequired;
