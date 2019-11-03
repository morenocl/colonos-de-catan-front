import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchBuilding,
  dispatchBuying,
  dispatchOnClick,
  dispatchError,
  dispatchRobbing,
  dispatchRunning,
} from './Actions.ducks';
import {
  setFrozen as dispatchGameFrozen,
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../Game/Game.ducks';
/* eslint-disable import/no-named-as-default */
import actionOnClick from './ActionsOnClick';
import BankTrade from './BankTrade';
import Robbing from './Robbing';
import ActionsScreen from '../../components/Actions/Actions';
import Error from '../../components/Error';
/* eslint-enable import/no-named-as-default */
import { getGameStatus } from '../../utils/Mock';


const mapStateToProps = (state) => ({
  draw: state.Board.draw,
  stage: state.Actions.stage,
});

const mapDispatchToProps = ({
  setBuilding: dispatchBuilding,
  setBuying: dispatchBuying,
  setError: dispatchError,
  setOnClick: dispatchOnClick,
  setRobbing: dispatchRobbing,
  setRunning: dispatchRunning,
  setGameFrozen: dispatchGameFrozen,
  setGameRunning: dispatchGameRunning,
  setGameState: dispatchGameState,
});

export const Actions = (props) => {
  const { stage, draw } = props;
  const {
    setBuilding, setBuying, setError,
    setOnClick, setRunning, setRobbing,
  } = props;
  const {
    setGameFrozen, setGameRunning, setGameState,
  } = props;
  const { id } = useParams();

  const refresh = () => {
    setRunning();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };

  // Set onClick generators for buttons.
  const eventHandlers = {
    draw,
    refresh,
    setBuilding,
    setBuying,
    setError,
    setGameFrozen,
    setRobbing,
  };
  setOnClick(actionOnClick(id, eventHandlers));

  if (stage === 'buying') return (<BankTrade />);

  if (stage === 'building') {
    return (
      <>
        <h1>Choose a position</h1>
        <Button onClick={refresh}>
          Cancel
        </Button>
      </>
    );
  }

  if (stage === 'robbing') return (<Robbing type="play_knight_card" />);
  if (stage === 'running') return (<ActionsScreen />);

  // On error, show a dismissible Alert.
  // When dismissed, show actions and refresh.
  return (<Error onClose={refresh} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);


Actions.propTypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  stage: PropTypes.string.isRequired,
  setBuilding: PropTypes.func.isRequired,
  setBuying: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setOnClick: PropTypes.func.isRequired,
  setRobbing: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setGameFrozen: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};

Actions.defaultProps = {
  draw: null,
};
