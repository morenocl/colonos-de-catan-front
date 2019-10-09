const path = "http://demo3924168.mockable.io";

function request(url, options, onSuccess, onFailure) {
  fetch(url, options)
    .then(r => {
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
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  request(url, option, onSuccess, onFailure);
}
