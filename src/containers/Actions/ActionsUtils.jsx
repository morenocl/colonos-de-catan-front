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


export const buildingRequests = (id, refresh, setError, setRunning, addAction) => {
  const onSuccess = () => {
    setRunning();
    refresh();
  };

  const cBuild = (position) => () => {
    addAction("Building a city at " + position.index);
    buildCity(id, position, onSuccess, setError);
  };

  const rBuild = (position) => () => {
    let pos = '' + position[0].index + "x" + position[1].index;
    addAction("Building a road at " + pos);
    buildRoad(id, position, onSuccess, setError);
  };

  const sBuild = (position) => () => {
    addAction("Building a settlement at " + position.index);	
    buildSettlement(id, position, onSuccess, setError);
  };

  return ({
    cBuild, rBuild, sBuild,
  });
};
