import {
  cities, hexagons, roads, robber, settlements,
} from './BoardData';
import { actions } from './ActionsData';


export const configs = {};
const TIMEOUT = 100;

export const getGameStatus = (id, onSuccess, onFailure) => {
  const c = configs.cities || cities;
  const r = configs.roads || roads;
  const s = configs.settlements || settlements;

  const board = {
    cities: c, hexagons, roads: r, robber, settlements: s,
  };
  const hand = { resources: [], cards: [] };
  const info = {};

  const p0 = new Promise((res) => {
    setTimeout(() => res(actions), configs.timeout || TIMEOUT);
  });
  const p1 = new Promise((res) => {
    setTimeout(() => res(board), configs.timeout || TIMEOUT);
  });
  const p2 = new Promise((res) => {
    setTimeout(() => res(hand), configs.timeout || TIMEOUT);
  });
  const p3 = new Promise((res) => {
    setTimeout(() => res(info), configs.timeout || TIMEOUT);
  });

  Promise.all([p0, p1, p2, p3]).then(
    (rs) => {
      if (configs.getGameStatus) onFailure();
      else onSuccess(...rs);
    },
  );
};

export const buyCard = (id, onSuccess, onFailure) => {
  console.log('Bought card', id);
  if (configs.buyCard) onFailure();
  else onSuccess();
};

export const buildCity = (id, pos, onSuccess, onFailure) => {
  console.log('Built city', id, pos);

  // Update response.
  configs.cities = [...cities];
  configs.cities[0].positions.push({
    level: 2,
    index: 13,
  });

  if (configs.buildCity) onFailure();
  else onSuccess();
};

export const buildRoad = (id, pos, onSuccess, onFailure) => {
  console.log('Built road', id, pos);

  // Update response.
  configs.roads = [...roads];
  configs.roads[0].positions.push([
    {
      level: 2,
      index: 16,
    },
    {
      level: 2,
      index: 17,
    },
  ]);

  if (configs.buildRoad) onFailure();
  else onSuccess();
};

export const buildSettlement = (id, pos, onSuccess, onFailure) => {
  console.log('Built settlement', id, pos);

  // Update response.
  configs.settlements = [...settlements];
  configs.settlements[0].positions.push({
    level: 2,
    index: 15,
  });

  if (configs.buildSettlement) onFailure();
  else onSuccess();
};
