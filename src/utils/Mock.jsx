/* eslint-disable no-console */
import data from './Data';

const mkPromise = (x) => (
  new Promise((res) => {
    setTimeout(() => res(data[x]), data.timeout);
  })
);

export const getGameStatus = (id, onSuccess, onFailure) => {
  const p0 = mkPromise('actions');
  const p1 = mkPromise('board');
  const p2 = mkPromise('hand');
  const p3 = mkPromise('info');

  Promise.all([p0, p1, p2, p3])
    .then((rs) => {
      if (data.getGameStatus) onFailure();
      else onSuccess(...rs);
    });
};

export const buyCard = (id, onSuccess, onFailure) => {
  console.log('Bought card', id);

  // Decrement number of cards to buy.
  data.cardsToBuy -= 1;
  if (data.cardsToBuy === 0) {
    // Find action index and remove it.
    const actionId = data.actions.findIndex((x) => x && x.type === 'buy_card');
    delete data.actions[actionId];
  }

  data.actions = [...data.actions];

  if (data.buyCard) onFailure();
  else onSuccess();
};

export const buildCity = (id, pos, onSuccess, onFailure) => {
  console.log('Built city', id, pos);

  // Update response.
  data.board.cities = [...data.board.cities];
  data.board.cities[0].positions.push(pos);

  // Find action index.
  const actionId = data.actions.findIndex((x) => x && x.type === 'upgrade_city');
  // Find payload index.
  const posId = data.actions[actionId].payload.indexOf(pos);
  // Remove from available positions.
  data.actions[actionId].payload.splice(posId, 1);
  if (data.actions[actionId].payload.length === 0) delete data.actions[actionId];

  if (data.buildCity) onFailure();
  else onSuccess();
};

export const buildRoad = (id, pos, onSuccess, onFailure) => {
  console.log('Built road', id, pos);

  // Update response.
  data.board.roads = [...data.board.roads];
  data.board.roads[0].positions.push(pos);

  // Find action index.
  const actionId = data.actions.findIndex((x) => x && x.type === 'build_road');
  // Find payload index.
  const posId = data.actions[actionId].payload.indexOf(pos);
  // Remove from available positions.
  data.actions[actionId].payload.splice(posId, 1);
  if (data.actions[actionId].payload.length === 0) delete data.actions[actionId];

  if (data.buildRoad) onFailure();
  else onSuccess();
};

export const buildSettlement = (id, pos, onSuccess, onFailure) => {
  console.log('Built settlement', id, pos);

  // Update response.
  data.board.settlements = [...data.board.settlements];
  data.board.settlements[0].positions.push(pos);

  // Find action index.
  const actionId = data.actions.findIndex((x) => x && x.type === 'build_settlement');
  // Find payload index.
  const posId = data.actions[actionId].payload.indexOf(pos);
  // Remove from available positions.
  data.actions[actionId].payload.splice(posId, 1);
  if (data.actions[actionId].payload.length === 0) delete data.actions[actionId];

  if (data.buildSettlement) onFailure();
  else onSuccess();
};

export const bankTrade = (id, offer, request, onSuccess, onFailure) => {
  console.log('Bank trade', offer, request, id);

  // Decrement number of resources to buy.
  data.resourcesToBuy -= 1;
  if (data.resourcesToBuy === 0) {
    // Find action index and remove it.
    const actionId = data.actions.findIndex((x) => x && x.type === 'bank_trade');
    delete data.actions[actionId];
  }

  data.actions = [...data.actions];

  if (data.bankTrade) onFailure();
  else onSuccess();
};
