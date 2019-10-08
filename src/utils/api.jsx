const path = 'http://localhost:3000';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

export function login(username, password, onSuccess, onFailure) {
  const url = `${path}/users/login/`;
  const data = { user: username, pass: password };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(url, option, onSuccess, onFailure);
}

export function listLobbies(onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, onFailure);
}

export function joinLobby(id, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'PUT'
  };
  request(url, option, undefined, onFailure);
}

export function boardStatus(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/board`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, onFailure);
}

export function playerCardsAndResource(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/player`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, onFailure);
}
