const path = 'https://demo4861279.mockable.io';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

export function listLobbies(onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  const option = {
    method: 'GET',
  };
  request(url, option, onSuccess, onFailure);
}

export function joinLobby(id, onFailure) {
  const url = `${path}/rooms/${id}/`;
  const option = {
    method: 'PUT',
  };
  request(url, option, undefined, onFailure);
}
