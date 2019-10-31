import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchError,
  dispatchRunning,
} from './Actions.ducks';
import {
  setRunning as dispatchGameRunning,
} from '../Game/Game.ducks';
import BankTradeScreen from '../../components/Actions/BankTrade';
import { bankTrade, getGameStatus } from '../../utils/Mock';


const mapDispatchToProps = ({
  setError: dispatchError,
  setRunning: dispatchRunning,
  setGameRunning: dispatchGameRunning,
});

export const BankTrade = (props) => {
  const {
    setError, setRunning, setGameRunning, setGameState,
  } = props;
  const { id } = useParams();
  const [offer, setOffer] = useState('');
  const [request, setRequest] = useState('');

  const refresh = () => {
    setRunning();
    setGameRunning();
    getGameStatus(id, setGameState, setError);
  };

  const trade = () => {
    bankTrade(id, offer, request, refresh, setError);
  };

  return (
    <BankTradeScreen
      setOffer={setOffer}
      setRequest={setRequest}
      trade={trade}
      offer={offer}
      request={request}
      cancel={refresh}
    />
  );
};

export default connect(null, mapDispatchToProps)(BankTrade);


BankTrade.propTypes = {
  setError: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
  setGameRunning: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};
