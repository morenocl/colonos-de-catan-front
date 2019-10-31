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
  dispatchRunning,
} from './Actions.ducks';
import {
  setFrozen as dispatchFrozen,
  setRunningStage as dispatchRunningStage,
} from '../Game/Game.ducks';
/* eslint-disable import/no-named-as-default */
import actionOnClick from './ActionsOnClick';
import BankTrade from './BankTrade';
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
  setRunning: dispatchRunning,
  setFrozen: dispatchFrozen,
  setRunningStage: dispatchRunningStage,
});

export const Actions = (props) => {
  const { stage } = props;
  const {
    draw, setBuilding, setBuying, setError,
    setOnClick, setRunning, setRunningStage, setFrozen,
  } = props;
  const { id } = useParams();

  const refresh = () => {
    getGameStatus(id, setRunningStage, setError);
  };

  // Set onClick generators for buttons.
  const eventHandlers = {
    draw,
    refresh,
    setBuilding,
    setBuying,
    setError,
    setFrozen,
    setRunning,
  };
  setOnClick(actionOnClick(id, eventHandlers));

  // On error, show a dismissible Alert.
  // When dismissed, show actions and refresh.
  if (stage === 'error') {
    return (
      <Error
        onClose={() => { setRunning(); refresh(); }}
      />
    );
  }

  if (stage === 'buying') return (<BankTrade />);

  if (stage === 'building') {
    return (
      <>
        <h1>
      Choose a position
        </h1>
        <Button onClick={() => { setRunning(); refresh(); }}>
      Cancel
        </Button>
      </>
    );
  }

  return (
    <ActionsScreen />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);


Actions.propTypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  setBuilding: PropTypes.func.isRequired,
  setBuying: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setFrozen: PropTypes.func.isRequired,
  setOnClick: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setRunningStage: PropTypes.func.isRequired,
  stage: PropTypes.string.isRequired,
};

Actions.defaultProps = {
  draw: null,
};
