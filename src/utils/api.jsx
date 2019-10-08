const path = 'http://localhost:3000';

const onSuccess = (data) => { return data };

const handleError = (response) => console.log(response);

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

export function login(username, password) {
  const url = `${this.path}/users/login/`;
  const data = { user: username, pass: password };
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request(url, option, onSuccess, handleError);
}

export function listLobbies() {
  const url = `${this.path}/rooms/`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, handleError);
}

export function joinLobby(id) {
  const url = `${this.path}/rooms/${id}/`;
  const option = {
    method: 'PUT'
  };
  request(url, option, onSuccess, handleError);
}

export function boardStatus(id) {
  const url = `${this.path}/games/${id}/board`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, handleError);
}

export function playerCardsAndResource(id) {
  const url = `${this.path}/games/${id}/player`;
  option = {
    method: 'GET',
  };
  request(url, option, onSuccess, handleError);
}
