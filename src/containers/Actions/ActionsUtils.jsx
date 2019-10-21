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

export const buildingColour = '#000000';

export const buildingRequests = (id, refresh, setError, setRunning) => {
  const onSuccess = () => {
    setRunning();
    refresh();
  };

  const cBuild = (position) => () => {
    buildCity(id, position, onSuccess, setError);
  };

  const rBuild = (position) => () => {
    buildRoad(id, position, onSuccess, setError);
  };

  const sBuild = (position) => () => {
    buildSettlement(id, position, onSuccess, setError);
  };

  return ({
    cBuild, rBuild, sBuild,
  });
};

export const cardTypes = [
  'buy_card',
  'play_knight_card',
  'play_road_building_card',
  'play_monopoly_card',
  'play_year_of_plenty_card',
];
