import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchError,
  dispatchWaiting,
} from './Actions.ducks';
import {
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../Game/Game.ducks';
/* eslint-disable import/no-named-as-default */
import ActionsScreen from '../../components/Actions/Actions';
import Error from '../../components/Error';
/* eslint-enable import/no-named-as-default */
import actionsContainers from './ActionsContainers';
import { getGameStatus } from '../../utils/Mock';


export const mapStateToProps = (state) => ({
  moveRobber: state.Game.actions.some((x) => x && x.type === 'move_robber'),
  stage: state.Actions.stage,
});

export const mapDispatchToProps = ({
  setError: dispatchError,
  setWaiting: dispatchWaiting,
  setGameRunning: dispatchGameRunning,
  setGameState: dispatchGameState,
});

export const Actions = (props) => {
  const { moveRobber, stage } = props;
  const {
    setError, setWaiting,
    setGameState, setGameRunning,
  } = props;
  const { id } = useParams();

  const refresh = () => {
    setWaiting();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };

  const [s0, s1, s2] = stage.split('/');

  if (s0 === 'running') {
    if (s1 === 'buying') return (actionsContainers.buying);

    if (s1 === 'building') {
      if (s2 === 'settlement') {
        return (actionsContainers.buildingSettlement);
      }

      if (s2 === 'city') {
        return (actionsContainers.buildingCity);
      }

      return (
        <>
          <h1>Choose a position</h1>
          <Button onClick={refresh}>
              Cancel
          </Button>
        </>
      );
    }

    if (s1 === 'robbing') {
      if (moveRobber) return (actionsContainers.robberRobbing);
      return (actionsContainers.knightRobbing);
    }
  }

  if (moveRobber) return (actionsContainers.moveRobber);

  if (s0 === 'waiting') return (<ActionsScreen />);

  // On error, show a dismissible Alert.
  // When dismissed, show actions and refresh.
  return (<Error onClose={refresh} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);


Actions.propTypes = {
  moveRobber: PropTypes.bool.isRequired,
  stage: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setWaiting: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};
