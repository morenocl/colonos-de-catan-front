import {
  cities, hexagons, roads, robber, settlements,
} from './BoardData';
import { actions } from './ActionsData';


export const configs = {};
const TIMEOUT = 100;

export const getGameStatus = (id, onSuccess, onFailure) => {
  const board = {
    cities, hexagons, roads, robber, settlements,
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
