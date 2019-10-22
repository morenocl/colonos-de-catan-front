import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import { resources } from '../../containers/Actions/ActionsUtils';


const BankTrade = ({
  setOffer, setRequest, trade, offer, request,
}) => {
  const format = (string, n) => {
    const initial = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    const number = ` (x${n})`;
    return (initial + rest + number);
  };

  const item = (s, n) => (
    <Dropdown.Item
      eventKey={s}
      key={s}
    >
      {format(s, n)}
    </Dropdown.Item>
  );

  const offerOpts = (
    <td>
      <DropdownButton
        title={offer ? `${format(offer, 4)}` : 'Offer'}
        id="offer"
        onSelect={setOffer}
      >
        {resources.map((s) => item(s, 4))}
      </DropdownButton>
    </td>
  );

  const requestOpts = (
    <td>
      <DropdownButton
        title={request ? `${format(request, 1)}` : 'Request'}
        id="request"
        onSelect={setRequest}
      >
        {resources.map((s) => item(s, 1))}
      </DropdownButton>
    </td>
  );

  const confirmTrade = (
    <td>
      <Button
        variant="success"
        onClick={trade}
        disabled={offer === '' || request === '' || offer === request}
      >
        Trade
      </Button>
    </td>
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Please choose.
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {offerOpts}
          {requestOpts}
        </tr>
        <tr>
          {confirmTrade}
        </tr>
      </tbody>
    </Table>
  );
};

export default BankTrade;


BankTrade.propTypes = {
  setOffer: PropTypes.func.isRequired,
  setRequest: PropTypes.func.isRequired,
  trade: PropTypes.func.isRequired,
  offer: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};
