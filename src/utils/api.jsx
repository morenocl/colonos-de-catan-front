export function boardStatus(id, onSuccess, onFailure) {
  if (id === -1) onFailure('Error');

  onSuccess([
      {
        position: {
          level: 1,
          index: 1,
        },
        resource: '1',
        token: 1,
      },
      {
        position: {
          level: 2,
          index: 2,
        },
        resource: '2',
        token: 2,
      },
      {
        position: {
          level: 3,
          index: 3,
        },
        resource: '3',
        token: 3,
      },
    ]
  );
}
