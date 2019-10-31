/* eslint-disable no-console */
import data from './Data';


const mkPromise = (x) => (
  new Promise((res) => {
    setTimeout(() => {
      res(x && JSON.parse(JSON.stringify(data[x])));
    }, data.timeout);
  })
);

/* Game */
export const getGameStatus = (id, onSuccess, onFailure) => {
  console.log('Getting game status', id);

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
  console.log('Buying card', id);

  mkPromise()
    .then(() => {
    // Decrement number of cards to buy.
      data.cardsToBuy -= 1;
      if (data.cardsToBuy === 0) {
      // Find action index and remove it.
        const actionId = data.actions.findIndex((x) => x && x.type === 'buy_card');
        delete data.actions[actionId];
      }

      data.actions = JSON.parse(JSON.stringify(data.actions));

      if (data.buyCard) onFailure();
      else onSuccess();
    });
};

export const buildCity = (id, pos, onSuccess, onFailure) => {
  console.log('Building city', id, pos);

  mkPromise()
    .then(() => {
      // Update response.
      data.board.cities = JSON.parse(JSON.stringify(data.board.cities));
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
    });
};

export const buildRoad = (id, pos, onSuccess, onFailure) => {
  console.log('Building road', id, pos);

  mkPromise()
    .then(() => {
      // Update response.
      data.board.roads = JSON.parse(JSON.stringify(data.board.roads));
      data.board.roads[0].positions.push(pos);

      // Find action index.
      const actionId = data.actions.findIndex((x) => x && x.type === 'build_road');

      // Find payload index.
      const posId = data.actions[actionId].payload
        .findIndex((x) => (x
          && x[0].level === pos[0].level && x[0].index === pos[0].index
          && x[1].level === pos[1].level && x[1].index === pos[1].index));

      // Remove from available positions.
      data.actions[actionId].payload.splice(posId, 1);
      if (data.actions[actionId].payload.length === 0) delete data.actions[actionId];

      if (data.buildRoad) onFailure();
      else onSuccess();
    });
};

export const buildSettlement = (id, pos, onSuccess, onFailure) => {
  console.log('Building settlement', id, pos);

  mkPromise()
    .then(() => {
      // Update response.
      data.board.settlements = JSON.parse(JSON.stringify(data.board.settlements));
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
    });
};

export const bankTrade = (id, offer, request, onSuccess, onFailure) => {
  console.log('Buying resource', offer, request, id);

  mkPromise()
    .then(() => {
      // Decrement number of resources to buy.
      data.resourcesToBuy -= 1;
      if (data.resourcesToBuy === 0) {
        // Find action index and remove it.
        const actionId = data.actions.findIndex((x) => x && x.type === 'bank_trade');
        delete data.actions[actionId];
      }

      data.actions = JSON.parse(JSON.stringify(data.actions));

      if (data.bankTrade) onFailure();
      else onSuccess();
    });
};

/* Rooms */
export const getRooms = (onSuccess, onFailure) => {
  console.log('Getting rooms');

  mkPromise('rooms')
    .then((rooms) => {
      if (data.getRooms) onFailure();
      else onSuccess(rooms);
    });
};

export const joinRoom = (id, onSuccess, onFailure) => {
  console.log('Joining room', id);

  mkPromise()
    .then(() => {
      if (data.joinRoom) onFailure();
      else onSuccess();
    });
};

export const getBoards = (onSuccess, onFailure) => {
  console.log('Getting boards');

  mkPromise('boards')
    .then((b) => {
      if (data.joinRoom) onFailure();
      else onSuccess(b);
    });
};

export const createRoom = (name, boardId, onSuccess, onFailure) => {
  console.log('Creating room', name, boardId);

  mkPromise()
    .then(() => {
      if (data.joinRoom) onFailure();
      else onSuccess(JSON.parse(JSON.stringify(data.rooms[0])));
    });
};


export const signup = (username, password, onSuccess, onFailure) => {
  console.log('Signing up', username, password);

  mkPromise()
    .then(() => {
      // Check if user is registered.
      const found = data.users.find((user) => user.username === username);
      if (found) {
        onFailure(Error('User is already registered'));
      } else {
        // Register.
        data.users = [...data.users, { username, password }];
        onSuccess();
      }
    });
};

export const login = (username, password, onSuccess, onFailure) => {
  console.log('Logging in', username, password);

  mkPromise()
    .then(() => {
      // Check if user is registered.
      const user = data.users.find((x) => x.username === username);
      const pass = data.users.find((x) => x.password === password);
      if (user && pass) {
        onSuccess({ token: 'token' });
      } else if (!user) {
        onFailure(Error('Failed to login: You are not registered'));
      } else if (!pass) {
        onFailure(Error('Failed to login: Password invalid'));
      }
    });
};

export const getRoom = (id, onSuccess, onFailure) => {
  console.log('Got room', id);

  mkPromise()
    .then(() => {
      const room = data.rooms.find((r) => r && r.id === Number(id));

      if (!data.waiting[id]) data.waiting[id] = data.totalWait;

      data.waiting[id] -= 1;
      if (data.waiting[id] <= 0) {
        room.game_has_started = true;
        room.game_id = 1;
        data.rooms[data.rooms.indexOf(room)] = { ...room };
      }

      if (data.getRoom) onFailure();
      else onSuccess(room);
    });
};

export const startGame = (id, onSuccess, onFailure) => {
  console.log('Started game');

  mkPromise()
    .then(() => {
      const room = data.rooms.find((r) => r && r.id === Number(id));
      room.game_has_started = true;
      room.game_id = 2;
      data.rooms = [...data.rooms];

      if (data.startGame) onFailure();
      else onSuccess();
    });
};
