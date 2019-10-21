import PropTypes from 'prop-types';

const path = 'http://localhost:3000';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      else return r.json().then(onSuccess);
    })
    .catch(onFailure);
}

export function login(username, password, onSuccess, onFailure) {
  const url = `${path}/users/login/`;
  const data = { user: username, pass: password };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(url, option)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

export function register(username, password, onSuccess, onFailure) {
  const url = `${path}/users/`;
  const data = { user: username, pass: password };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  request(url, option, onSuccess, onFailure);
}

export function listRooms(onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  const option = {
    method: 'GET',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, onSuccess, onFailure);
}

export function createRoom(name, id, onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  const data = { name, board_id: id };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, onSuccess, onFailure);
}

export function getRoom(id, onSuccess, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'GET',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, onSuccess, onFailure);
}

export function startGame(id, onSuccess, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'PATCH',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, onSuccess, onFailure);
}

export function joinRoom(id, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'PUT',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, undefined, onFailure);
}

export function gameStatus(id, onSuccess, onFailure) {
  const actions = `${path}/games/${id}/player/actions`;
  const board = `${path}/games/${id}/board`;
  const hand = `${path}/games/${id}/player`;
  const info = `${path}/games/${id}`;
  const endPoint = [actions, board, hand, info];

  const option = {
    method: 'GET',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };

  const getFromPlayers = (ps) => ({
    settlements: ps.map((player) => ({
      colour: player.colour,
      settlements: player.settlements,
    })),
    cities: ps.map((player) => ({
      colour: player.colour,
      cities: player.cities,
    })),
    roads: ps.map((player) => ({
      colour: player.colour,
      roads: player.roads,
    })),
    players: ps.map((player) => ({
      username: player.username,
      colour: player.colour,
      developmentCards: player.development_cards,
      resourceCards: player.resources_cards,
      lastGained: player.last_gained,
    })),
  });

  return Promise.all(endPoint.map((e) => fetch(e, option)))
    .then((rs) => rs.map((r) => (r.ok ? r.json() : onFailure(Error(r.statusText)))))

    .then((rs) => {
      const { settlements, cities, roads, players } = getFromPlayers(rs[3].players);

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
          winner: rs[3].winner, // Es opcional, fijarse como manejarlo
        },
      });
    })
    .catch(onFailure);
}

export function playAction(id, action, payload, onSuccess, onFailure) {
  const url = `${path}/games/${id}/player/actions`;
  const data = { type: action, payload };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
  request(url, option, onSuccess, onFailure);
}

login.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

register.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

listRooms.PropTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

createRoom.PropTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

getRoom.PropTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

startGame.PropTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

joinRoom.PropTypes = {
  id: PropTypes.number.isRequired,
  onFailure: PropTypes.func.isRequired,
};

gameStatus.PropTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

playAction.PropTypes = {
  id: PropTypes.number.isRequired,
  actions: PropTypes.string.isRequired,
  payload: PropTypes.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
