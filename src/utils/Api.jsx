const path = 'http://demo5460123.mockable.io';

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then((r) => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

export function playerHand(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/player`;
  const option = {
    method: 'GET',
  };
  request(url, option, onSuccess, onFailure);
}
