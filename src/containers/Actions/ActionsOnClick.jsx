import showEdges from '../../components/Board/ShowEdges';
import { buyCard, endTurn } from '../../utils/Mock';
import { buildingRequests } from './ActionsUtils';
import { colours } from '../../utils/Constants';


// Returns an onClickMaker function for actions.
export const actionOnClick = (id, eventHandlers) => ((type) => {
  const { draw, refresh } = eventHandlers;
  const {
    setBuilding, setBuying, setError, setRobbing,
    setBuildingCity, setBuildingSettlement,
  } = eventHandlers;
  const { setGameFrozen } = eventHandlers;

  const {
    rBuild,
  } = buildingRequests(id, refresh, setError);

  switch (type) {
    case 'build_settlement':
      return () => (() => {
        setBuildingSettlement();
        setGameFrozen();
      });

    case 'build_road':
      return (ps) => (() => {
        setBuilding();
        setGameFrozen();
        showEdges(draw, ps, colours.building, rBuild);
      });

    case 'upgrade_city':
      return () => (() => {
        setBuildingCity();
        setGameFrozen();
      });

    case 'bank_trade':
      return () => (() => { setBuying(); });

    case 'buy_card':
      return () => (() => { buyCard(id, refresh, setError); });

    case 'play_knight_card':
      return () => (() => {
        setGameFrozen();
        setRobbing();
      });

    case 'end_turn':
      return () => (() => { endTurn(id, refresh, setError); });

    case 'move_robber':
      return () => (() => {
        setGameFrozen();
        setRobbing();
      });

    default:
      // eslint-disable-next-line no-console
      return () => (() => { console.log('default', type); });
  }
}
);

export default actionOnClick;


/*
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
*/
