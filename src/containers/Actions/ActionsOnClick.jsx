import { buyCard, endTurn } from '../../utils/Mock';


// Returns an onClickMaker function for actions.
export const actionOnClick = (id, eventHandlers) => ((type) => {
  const { refresh } = eventHandlers;
  const {
    setBuying, setError, setRobbing, setBuildingRoad,
    setBuildingCity, setBuildingSettlement,
  } = eventHandlers;
  const { setGameFrozen } = eventHandlers;

  switch (type) {
    case 'build_settlement':
      return () => {
        setGameFrozen();
        setBuildingSettlement();
      };

    case 'build_road':
      return () => {
        setGameFrozen();
        setBuildingRoad();
      };

    case 'upgrade_city':
      return () => {
        setGameFrozen();
        setBuildingCity();
      };

    case 'bank_trade':
      return () => { setBuying(); };

    case 'buy_card':
      return () => { buyCard(id, refresh, setError); };

    case 'play_knight_card':
      return () => {
        setGameFrozen();
        setRobbing();
      };

    case 'end_turn':
      return () => { endTurn(id, refresh, setError); };

    case 'move_robber':
      return () => {
        setGameFrozen();
        setRobbing();
      };

    default:
      // eslint-disable-next-line no-console
      return () => { console.log('default', type); };
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
