import React from 'react';
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
/* eslint-disable import/no-named-as-default */
import actionOnClick from './ActionsOnClick';
import ActionsScreen from '../../components/Actions/Actions';
import Error from '../../components/Error';
/* eslint-enable import/no-named-as-default */


const mapStateToProps = (state) => ({
  draw: state.Board.draw,
  refresh: state.Game.refresh,
  stage: state.Actions.stage,
});

const mapDispatchToProps = ({
  setBuilding: dispatchBuilding,
  setBuying: dispatchBuying,
  setError: dispatchError,
  setOnClick: dispatchOnClick,
  setRunning: dispatchRunning,
});

export const Actions = (props) => {
  const { stage } = props;
  const {
    draw, refresh, setBuilding, setBuying,
    setError, setOnClick, setRunning,
  } = props;
  const { id } = useParams();

  // Set onClick generators for buttons.
  const eventHandlers = {
    draw,
    refresh,
    setBuilding,
    setBuying,
    setError,
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

  if (stage === 'building') return (<h1> Choose position </h1>);

  if (stage === 'buying') return (<h1> Buying </h1>);

  return (
    <ActionsScreen />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);


Actions.propTypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  refresh: PropTypes.func.isRequired,
  setBuilding: PropTypes.func.isRequired,
  setBuying: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setOnClick: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  stage: PropTypes.string.isRequired,
};

Actions.defaultProps = {
  draw: null,
};
