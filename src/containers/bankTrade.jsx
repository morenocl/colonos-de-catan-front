import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BankTradeComponent from '../containers/bankTradeComponent';
import { playAction } from '../utils/Api';

const BankTrade = (props) => {
  const { id, onSuccess, onFailure } = props;
  const [offer, setOffer] = useState('');
  const [requested, setRequested] = useState('');

  const offerHandler = (key) => {
    setOffer(key);
  };

  const requestHandler = (key) => {
    setRequested(key);
  };

  const trade = () => {
    playAction(id, 'bank_trade', { give: offer, receive: requested }, onSuccess, onFailure);
  };

  return (
    <BankTradeComponent
      offerH={offerHandler}
      requestH={requestHandler}
      trader={trade}
      gives={offer}
      takes={requested}
    />
  );
};

export default BankTrade;

BankTrade.propTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
