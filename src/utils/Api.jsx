const path = 'http://demo4861279.mockable.io/auxtmp';

export function listLobbies(onSuccess, onFailure) {
  const url = `${path}/rooms/`;
  fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .catch(onFailure);
}

export function joinLobby(id) {
  console.log(`Joined lobby ${id}`);
}
