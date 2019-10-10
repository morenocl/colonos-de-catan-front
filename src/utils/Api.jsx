//const path = 'http://localhost:3000';
const path = 'https://demo4861279.mockable.io';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      else return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
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

