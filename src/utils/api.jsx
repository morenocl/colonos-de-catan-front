const path = 'http://demo4861279.mockable.io/';

export function boardStatus(id, onSuccess, onFailure) {
  const url = `${path}/games/${id}/board`;
  fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .catch(onFailure);
}

/*
export function boardStatus(id, onSuccess, onFailure) {
  if (id === -1) onFailure('Error');

  onSuccess([
      {
        position: {
          level: '0',
          index: '0',
        },
        resource: 'brick',
        token: '0,0',
      },
      {
        position: {
          level: '1',
          index: '0',
        },
        resource: 'ore',
        token: '1,0',
      },
      {
        position: {
          level: '1',
          index: '1',
        },
        resource: 'ore',
        token: '1,1',
      },
      {
        position: {
          level: '1',
          index: '2',
        },
        resource: 'ore',
        token: '1,2',
      },
      {
        position: {
          level: '1',
          index: '3',
        },
        resource: 'ore',
        token: '1,3',
      },
      {
        position: {
          level: '1',
          index: '4',
        },
        resource: 'ore',
        token: '1,4',
      },
      {
        position: {
          level: '1',
          index: '5',
        },
        resource: 'ore',
        token: '1,5',
      },
    ]
  );
}
*/
