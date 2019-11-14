import { path, getToken, request } from './ApiUtils';
import { colours } from './Constants';


/* Users */

export const signup = (username, password, onSuccess, onFailure) => {
  const url = `${path}/users/`;
  const data = { user: username, pass: password };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  request(url, options, onSuccess, onFailure);
};

export const login = (username, password, onSuccess, onFailure) => {
  const url = `${path}/users/login/`;
  const data = { user: username, pass: password };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  request(url, options, onSuccess, onFailure);
};


/* Boards */

export const getBoards = (onSuccess, onFailure) => {
  const url = `${path}/boards`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};


/* Rooms */

export const getRooms = (onSuccess, onFailure) => {
  const url = `${path}/rooms/`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const createRoom = (name, id, onSuccess, onFailure) => {
  const url = `${path}/rooms/`;
  const data = { name, board_id: id };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  request(url, options, onSuccess, onFailure);
};

export const getRoom = (id, onSuccess, onFailure) => {
  const url = `${path}/rooms/${id}/`;
  const options = { method: 'GET' };

  request(url, options, onSuccess, onFailure);
};

export const startGame = (id, onSuccess, onFailure) => {
  const url = `${path}/rooms/${id}/`;
  const options = { method: 'PATCH' };

  request(url, options, onSuccess, onFailure);
};

export const cancelRoom = (id, onSuccess, onFailure) => {
  const url = `${path}/rooms/${id}/`;
  const options = { method: 'DELETE' };
  request(url, options, onSuccess, onFailure);
};

export const joinRoom = (id, onFailure) => {
  const url = `${path}/rooms/${id}/`;
  const options = { method: 'PUT' };

  request(url, options, () => {}, onFailure);
};


/* Games */

const getFromPlayers = (ps) => ({
  settlements: ps.map((player) => ({
    colour: colours[player.colour],
    settlements: player.settlements,
  })),

  cities: ps.map((player) => ({
    colour: colours[player.colour],
    cities: player.cities,
  })),

  roads: ps.map((player) => ({
    colour: colours[player.colour],
    roads: player.roads,
  })),

  players: ps.map((player) => ({
    username: player.username,
    colour: colours[player.colour],
    developmentCards: player.development_cards,
    resourceCards: player.resources_cards,
    victoryPoints: player.victory_points,
    lastGained: player.last_gained,
  })),
});

export const getGameStatus = (id, onSuccess, onFailure) => {
  const actions = `${path}/games/${id}/player/actions`;
  const board = `${path}/games/${id}/board`;
  const hand = `${path}/games/${id}/player`;
  const info = `${path}/games/${id}`;

  const endPoints = [actions, board, hand, info];

  const options = {
    method: 'GET',
    headers: { Authorization: `Token ${getToken()}` },
  };

  Promise.all(endPoints.map((e) => fetch(e, options)))
    .then((rs) => rs.map((r) => (r.ok ? r.json() : onFailure(Error(r.statusText)))))
    .then((rs) => {
      const {
        settlements, cities, roads, players,
      } = getFromPlayers(rs[3].players);

      onSuccess({
        actions: rs[0],
        board: {
          hexagons: rs[1],
          robber: rs[3].robber,
          settlements,
          cities,
          roads,
        },
        hand: rs[2],
        info: {
          players,
          turn: rs[3].current_turn,
          winner: rs[3].winner,
        },
      });
    })
    .catch(onFailure);
};


// Actions

export const playAction = (id, type, payload, onSuccess, onFailure) => {
  const url = `${path}/games/${id}/player/actions`;
  const data = { type, payload };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  request(url, options, onSuccess, onFailure);
};

export const bankTrade = (id, give, receive, onSuccess, onFailure) => {
  playAction(id, 'bank_trade', { give, receive }, onSuccess, onFailure);
};

export const buildCity = (id, pos, onSuccess, onFailure) => {
  playAction(id, 'upgrade_city', pos, onSuccess, onFailure);
};

export const buildRoad = (id, pos, onSuccess, onFailure) => {
  playAction(id, 'build_road', pos, onSuccess, onFailure);
};

export const buildSettlement = (id, pos, onSuccess, onFailure) => {
  playAction(id, 'build_settlement', pos, onSuccess, onFailure);
};

export const buyCard = (id, onSuccess, onFailure) => {
  playAction(id, 'buy_card', null, onSuccess, onFailure);
};

export const endTurn = (id, onSuccess, onFailure) => {
  playAction(id, 'end_turn', null, onSuccess, onFailure);
};

export const moveRobber = (id, position, username, onSuccess, onFailure) => {
  playAction(id, 'move_robber', { position, username }, onSuccess, onFailure);
};

export const playKnight = (id, position, username, onSuccess, onFailure) => {
  playAction(id, 'play_knight_card', { position, username }, onSuccess, onFailure);
};

export const play2Roads = (id, p0, p1, onSuccess, onFailure) => {
  playAction(id, 'play_road_building_card', [p0, p1], onSuccess, onFailure);
};
