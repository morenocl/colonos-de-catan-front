import PropTypes from "prop-types";

const path = "http://demo3924168.mockable.io";

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("Login timeout"));
    }, ms);
    promise.then(resolve, reject);
  });
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
  timeout(5000, fetch(url, option))
    .then(r => {
      if (!r.ok) onFailure(Error(r.statusText));
      return r.json();
    })
    .then(onSuccess)
    .catch(onFailure);
}

login.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired
};
