import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dispatchError,
  dispatchRunning,
} from './Actions.ducks';
import BankTradeScreen from '../../components/Actions/BankTrade';
import { bankTrade } from '../../utils/Mock';


const mapStateToProps = (state) => ({
  refresh: state.Game.refresh,
});

const mapDispatchToProps = ({
  setError: dispatchError,
  setRunning: dispatchRunning,
});

export const BankTrade = (props) => {
  const { refresh, setRunning, setError } = props;
  const { id } = useParams();
  const [offer, setOffer] = useState('');
  const [request, setRequest] = useState('');

  const trade = () => {
    bankTrade(id, offer, request, () => { setRunning(); refresh(); }, setError);
  };

  return (
    <BankTradeScreen
      setOffer={setOffer}
      setRequest={setRequest}
      trade={trade}
      offer={offer}
      request={request}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BankTrade);

BankTrade.propTypes = {
  refresh: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setRunning: PropTypes.func.isRequired,
};
