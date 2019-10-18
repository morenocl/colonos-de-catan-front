/* eslint-disable no-console */

import PropTypes from 'prop-types';


// Returns a function that takes the action's payload
// as a parameter, and returns the appropriate
// onClick function.
export const actionOnClick = (type) => {
  switch (type) {
    case 'build_settlement':
      return (p) => (() => { console.log(type, p); });

    case 'build_road':
      return (p) => (() => { console.log(type, p); });

    case 'upgrade_city':
      return (p) => (() => { console.log(type, p); });

    case 'bank_trade':
      return () => (() => { console.log(type); });

    case 'buy_card':
      return () => (() => { console.log(type); });

    default:
      return () => (() => { console.log('default', type); });
  }
};

export default actionOnClick;


actionOnClick.propTypes = {
  type: PropTypes.string.isRequired,
};
