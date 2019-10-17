export const initialState = {
  rooms: [],
  stage: 'empty',
  setError: () => {},
  setRunning: () => {},
  setRooms: () => {},
};

export const errorState = {
  rooms: [],
  stage: 'error',
  setError: () => {},
  setRunning: () => {},
  setRooms: () => {},
};

export const runningState = {
  rooms: [
    {
      id: 1,
      name: 'nombre1',
      owner: 'owner1',
      players: ['user1.1', 'user1.2', 'user1.3'],
      max_players: 1,
    },
    {
      id: 2,
      name: 'nombre2',
      owner: 'owner2',
      players: ['user2.1', 'user2.2'],
      max_players: 2,
    },
  ],
  stage: 'runnig',
  setError: () => {},
  setRunning: () => {},
  setRooms: () => {},
};
