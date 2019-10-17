import { hexagons } from './Data';


export const configs = {};
const TIMEOUT = 100;

export const getGameStatus = (id, onSuccess, onFailure) => {
  const actions = [];
  const board = { hexagons };
  const hand = { resources: [], cards: [] };
  const info = {};

  const p0 = new Promise((res, rej) => {
    setTimeout(() => res(actions), configs.timeout || TIMEOUT);
  });
  const p1 = new Promise((res, rej) => {
    setTimeout(() => res(board), configs.timeout || TIMEOUT);
  });
  const p2 = new Promise((res, rej) => {
    setTimeout(() => res(hand), configs.timeout || TIMEOUT);
  });
  const p3 = new Promise((res, rej) => {
    setTimeout(() => res(info), configs.timeout || TIMEOUT);
  });

  Promise.all([p0, p1, p2, p3]).then(
    (rs) => {
      if (configs.getGameStatus) onFailure();
      else onSuccess(...rs);
    },
  );
};
