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
  const { draw, refresh } = eventHandlers;
  const {
    setBuilding, setBuying, setError,
  } = eventHandlers;
  const { setGameFrozen } = eventHandlers;

  const {
    cBuild, rBuild, sBuild,
  } = buildingRequests(id, refresh, setError);

  switch (type) {
    case 'build_settlement':
      return (ps) => (() => {
        setBuilding();
        setGameFrozen();
        showVertices(draw, colours.building, ps, 'settlement', sBuild);
      });

    case 'build_road':
      return (ps) => (() => {
        setBuilding();
        setGameFrozen();
        showEdges(draw, colours.building, ps, rBuild);
      });

    case 'upgrade_city':
      return (ps) => (() => {
        setBuilding();
        setGameFrozen();
        showVertices(draw, colours.building, ps, 'city', cBuild);
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
    setGameFrozen: PropTypes.func.isRequired,
  }).isRequired,
};
