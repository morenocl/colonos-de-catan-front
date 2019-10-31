/* eslint-disable no-console */

import PropTypes from 'prop-types';

import showVertices from '../../components/Board/ShowVertices';
import showEdges from '../../components/Board/ShowEdges';
import { buyCard } from '../../utils/Mock';
import { buildingRequests } from './ActionsUtils';
import { colours } from '../../utils/Constants';


// Returns a function that, given refresh and setError,
// takes the action's id and type and returns the
// appropriate onClick function (given its payload).
export const actionOnClick = (id, eventHandlers) => ((type) => {
  const {
    draw, refresh, setBuilding, setBuying,
    setError, setFrozen, setRunning,
  } = eventHandlers;

  const {
    cBuild, rBuild, sBuild,
  } = buildingRequests(id, refresh, setError, setRunning);

  switch (type) {
    case 'build_settlement':
      return (ps) => (() => {
        setBuilding();
        setFrozen();
        showVertices(draw, ps, colours.building, 'settlement', sBuild);
      });

    case 'build_road':
      return (ps) => (() => {
        setBuilding();
        setFrozen();
        showEdges(draw, ps, colours.building, rBuild);
      });

    case 'upgrade_city':
      return (ps) => (() => {
        setBuilding();
        setFrozen();
        showVertices(draw, ps, colours.building, 'city', cBuild);
      });

    case 'bank_trade':
      return () => (() => { setBuying(); });

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
  eventHandlers: PropTypes.shape({
    draw: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
    refresh: PropTypes.func.isRequired,
    setBuilding: PropTypes.func.isRequired,
    setBuying: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    setFrozen: PropTypes.func.isRequired,
    setRunning: PropTypes.func.isRequired,
  }).isRequired,
};
