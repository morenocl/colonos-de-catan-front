import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchOnClick,
  dispatchError,
  dispatchRunning,
} from './Actions.ducks';
// eslint-disable-next-line import/no-named-as-default
import actionOnClick from './ActionsOnClick';
import ActionsScreen from '../../components/Actions/Actions';
import Error from '../../components/Error';


const mapStateToProps = (state) => ({
  refresh: state.Game.refresh,
  stage: state.Actions.stage,
});

const mapDispatchToProps = ({
  setOnClick: dispatchOnClick,
  setError: dispatchError,
  setRunning: dispatchRunning,
});

export const Actions = (props) => {
  const { stage } = props;
  const {
    refresh, setError, setOnClick, setRunning,
  } = props;
  const { id } = useParams();

  // Set onClick generators for buttons.
  setOnClick(actionOnClick(id, refresh, setError));

  // On error, show a dismissible Alert.
  // When dismissed, show actions and refresh.
  if (stage === 'error') {
    return (
      <Error
        onClose={() => { setRunning(); refresh(); }}
      />
    );
  }

  return (
    <ActionsScreen />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);


Actions.propTypes = {
  refresh: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setOnClick: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  stage: PropTypes.string.isRequired,
};
