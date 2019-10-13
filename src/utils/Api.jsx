import PropTypes from 'prop-types';


const path = 'http://demo4861279.mockable.io';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) return (onFailure(Error(r.statusText)));
      return (r.json());
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
      'Content-Type': 'application/json',
    },
  };

  request(url, option, onSuccess, onFailure);
}

export function listLobbies(onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  const option = {
    method: 'GET',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };

  request(url, option, onSuccess, onFailure);
}

export function joinLobby(id, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'PUT',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };

  request(url, option, undefined, onFailure);
}

export function boardStatus(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/board`;
  const option = {
    method: 'GET',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };

  request(url, option, onSuccess, onFailure);
}

export function playerHand(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/player`;
  const option = {
    method: 'GET',
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

listLobbies.PropTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

joinLobby.PropTypes = {
  id: PropTypes.number.isRequired,
  onFailure: PropTypes.func.isRequired,
};

boardStatus.PropTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};

playerHand.PropTypes = {
  id: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
};
