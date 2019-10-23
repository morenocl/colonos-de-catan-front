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

export const getBoards = (onSuccess, onFailure) => {
  setTimeout(() => {
    onSuccess([
      {
        id: 1,
        name: 'board1',
      },
      {
        id: 2,
        name: 'board2',
      },
      {
        id: 3,
        name: 'board3',
      },
    ]);
  }, 10);
};

export const createRoom = (name, boardId, onSuccess, onFailure) => {
  console.log(name, boardId);
  setTimeout(() => {
    onSuccess({ id: 1 });
  }, 100);
};


export const signup = (username, password, onSuccess, onFailure) => {
  console.log('Register User: ', username, password);

  // Search if the user currently exists
  mkPromise()
    .then(() => {
      const found = data.users.find((user) => user.username === username);
      if (!found) {
        // New user registration
        data.users = [...data.users, { username, password }];
        onSuccess();
      } else {
        onFailure(Error('User is already registered'));
      }
    });
};

export const login = (username, password, onSuccess, onFailure) => {
  console.log('Login User: ', username, password);

  // Search if the user currently exists
  mkPromise()
    .then(() => {
      const findUser = data.users.find((user) => user.username === username);
      const findPass = data.users.find((user) => user.password === password);
      if (findUser && findPass) {
        // User is registered
        data.users = [...data.users, { username, password }];
        onSuccess({ token: 'token' });
      } else if (!findUser) {
        onFailure(Error('Failed to login: You are not registered'));
      } else if (!findPass) {
        onFailure(Error('Failed to login: Password Invalid'));
      }
    });
};
