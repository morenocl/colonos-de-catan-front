import { buildCity, buildRoad, buildSettlement } from '../../utils/Mock';


export const actionLabels = {
  build_settlement: 'Build settlement',
  build_road: 'Build road',
  upgrade_city: 'Build city',
  bank_trade: 'Bank',
  transaction: 'Trade',
  end_turn: 'End turn',
  buy_card: 'Buy card',
  play_knight_card: 'Play knight',
  play_road_building_card: 'Play 2 roads',
  play_monopoly_card: 'Play monopoly',
  play_year_of_plenty_card: 'Play year of plenty',
};


export const buildingRequests = (id, refresh, setError) => {
  const cBuild = (position) => () => {
    buildCity(id, position, refresh, setError);
  };

  const rBuild = (position) => () => {
    buildRoad(id, position, refresh, setError);
  };

  const sBuild = (position) => () => {
    buildSettlement(id, position, refresh, setError);
  };

  return ({
    cBuild, rBuild, sBuild,
  });
};
