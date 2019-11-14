export const path = process.env.REACT_APP_PATH || 'http://localhost:8000';

export const getToken = () => JSON.parse(localStorage.getItem('token'));

export const request = (url, opts, onSuccess, onFailure) => {
  const options = { ...opts };
  const token = getToken();

  if (!options.headers) options.headers = {};

  if (token) options.headers.Authorization = `Token ${token}`;

  if (options.headers.body) options.headers['Content-Type'] = 'application/json';

  fetch(url, options)
    .then((r) => {
      if (!r.ok) return onFailure(Error(r.statusText));
      return r.json().then(onSuccess);
    })
    .catch(onFailure);
};
