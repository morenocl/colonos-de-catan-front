const path = 'http://localhost:3000';

const handleError = (response) => console.log(response);

class Api {
  constructor() {
    this.path = path;
  }

  login(username, password) {
    const url = '${this.path}/users/login/';
    const data = { user: username, pass: password };
    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, init)
      .then((response) => {
        return response.json();
      })
      .catch(handleError);
  }

  listLobbies() {
    const url = '${this.path}/rooms/';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch(handleError);
  }

  joinLobby(id) {
    const url = '${this.path}/rooms/${id}/';
    fetch(url, {
      method: 'PUT'
    })
      .catch(handleError);
  }

  boardStatus(id) {
    const url = '${this.path}/games/${id}/board';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch(handleError);
  }

  playerCardsAndResource(id) {
    const url = '${this.path}/games/${id}/player';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((response) => console.log(response));
  }
}

export default Api;
