import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import {
  dispatchBuildingCity,
  dispatchBuildingRoad,
  dispatchBuildingSettlement,
  dispatchBuying,
  dispatchError,
  dispatchRobbing,
  dispatchWaiting,
} from './Actions.ducks';
import { actionLabels } from '../../utils/Constants';
import actionsOnClick from './ActionsOnClick';
import {
  setFrozen as dispatchGameFrozen,
  setRunning as dispatchGameRunning,
  setState as dispatchGameState,
} from '../Game/Game.ducks';
import { ActionType } from '../../utils/ApiTypes';
import { getGameStatus } from '../../utils/Mock';


export const mapStateToProps = (state, ownProps) => ({
  actions: state.Game.actions,
  C: ownProps.C,
  type: ownProps.type,
});

export const mapDispatchToProps = ({
  setBuildingCity: dispatchBuildingCity,
  setBuildingRoad: dispatchBuildingRoad,
  setBuildingSettlement: dispatchBuildingSettlement,
  setBuying: dispatchBuying,
  setError: dispatchError,
  setRobbing: dispatchRobbing,
  setWaiting: dispatchWaiting,
  setGameFrozen: dispatchGameFrozen,
  setGameRunning: dispatchGameRunning,
  setGameState: dispatchGameState,
});

// Renders the component C (a Button by default)
// with the appropriate label, disable and onClick.
export const ActionButton = (props) => {
  const { actions, C, type } = props;
  const {
    setError, setWaiting, setBuying, setRobbing,
    setBuildingCity, setBuildingRoad, setBuildingSettlement,
  } = props;
  const {
    setGameFrozen, setGameRunning, setGameState,
  } = props;
  const { id } = useParams();

  const refresh = () => {
    setWaiting();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };
  const eventHandlers = {
    refresh,
    setError,
    setBuying,
    setRobbing,
    setBuildingCity,
    setBuildingRoad,
    setBuildingSettlement,
    setGameFrozen,
  };

  const a = actions.find((x) => x && x.type === type);
  const onClickMaker = actionsOnClick(id, eventHandlers);
  const onClick = a && onClickMaker(type);

  return (
    <C
      disabled={!a}
      onClick={onClick}
      size="sm"
    >
      {actionLabels[type]}
    </C>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);


ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  C: PropTypes.elementType,
  actions: PropTypes.arrayOf(ActionType).isRequired,
  setBuildingCity: PropTypes.func.isRequired,
  setBuildingRoad: PropTypes.func.isRequired,
  setBuildingSettlement: PropTypes.func.isRequired,
  setBuying: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setRobbing: PropTypes.func.isRequired,
  setWaiting: PropTypes.func.isRequired,
  setGameFrozen: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
  C: Button,
};
