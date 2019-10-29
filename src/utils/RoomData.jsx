export const rooms = [
  {
    id: 1,
    name: 'Room 1',
    owner: 'test',
    players: ['test'],
    max_players: 1,
    game_has_started: false,
  },
  {
    id: 2,
    name: 'Room 2',
    owner: 'user2',
    players: ['user2'],
    max_players: 2,
    game_has_started: false,
  },
  {
    id: 3,
    name: 'Game 3',
    owner: 'user3',
    players: ['user1', 'user2', 'user3'],
    max_players: 3,
    game_has_started: false,
  },
  {
    id: 4,
    name: 'Room 4',
    owner: 'user4',
    players: ['user 4', 'test'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 5,
    name: 'Room 5',
    owner: 'test',
    players: ['test'],
    max_players: 1,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 6,
    name: 'Game 6',
    owner: 'user6',
    players: ['user1', 'user2', 'user6'],
    max_players: 3,
    game_has_started: true,
    game_id: 1,
  },
];

export const room = {};
