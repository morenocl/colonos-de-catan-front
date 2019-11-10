import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import {
  dispatchBuilding,
  dispatchBuying,
  dispatchError,
  dispatchRobbing,
  dispatchWaiting,
} from './Actions.ducks';
import { actionLabels } from './ActionsUtils';
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
  draw: state.Board.draw,
  type: ownProps.type,
});

export const mapDispatchToProps = ({
  setBuilding: dispatchBuilding,
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
  const { draw } = props;
  const {
    setBuilding, setBuying, setError,
    setWaiting, setRobbing,
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
    draw,
    refresh,
    setBuilding,
    setBuying,
    setError,
    setGameFrozen,
    setRobbing,
  };

  const onClickMaker = actionsOnClick(id, eventHandlers);
  const a = actions.find((x) => x && x.type === type);
  const onClick = a && onClickMaker(type)(a.payload);

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
  draw: PropTypes.shape({}),
  setBuilding: PropTypes.func.isRequired,
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
  draw: null,
};
