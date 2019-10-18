/* eslint-disable no-console */

import PropTypes from 'prop-types';

import { buyCard } from '../../utils/Mock';


// Returns a function that, given refresh and setError,
// takes the action's id and type and returns the
// appropriate onClick function (given its payload).
export const actionOnClick = (refresh, setError) => ((id, type) => {
  switch (type) {
    case 'build_settlement':
      return (ps) => (() => { console.log(type, ps); });

    case 'build_road':
      return (ps) => (() => { console.log(type, ps); });

    case 'upgrade_city':
      return (ps) => (() => { console.log(type, ps); });

    case 'bank_trade':
      return () => (() => { console.log(type); });

    case 'buy_card':
      return () => (() => { buyCard(id, refresh, setError); });

    default:
      return () => (() => { console.log('default', type); });
  }
}
);

export default actionOnClick;


actionOnClick.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
