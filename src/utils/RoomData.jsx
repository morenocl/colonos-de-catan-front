export const rooms = [
  {
    id: 1,
    name: 'Room 1',
    owner: 'user1',
    players: ['user1'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 2,
    name: 'Room 2',
    owner: 'user1',
    players: ['user1', 'user2'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 3,
    name: 'Game 3',
    owner: 'user1',
    players: ['user1', 'user2', 'user3', 'user4'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 4,
    name: 'Room 4',
    owner: 'user1',
    players: ['user1', 'user2', 'user3', 'user4'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 5,
    name: 'Room 5',
    owner: 'user1',
    players: ['user1', 'test'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 6,
    name: 'Room 6',
    owner: 'user1',
    players: ['user1', 'user2', 'test'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 7,
    name: 'Room 7',
    owner: 'user1',
    players: ['user1', 'user2', 'user3', 'test'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 8,
    name: 'Room 8',
    owner: 'user1',
    players: ['user1', 'user2', 'user3', 'test'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 9,
    name: 'Room 9',
    owner: 'test',
    players: ['user1', 'test'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 10,
    name: 'Room 10',
    owner: 'test',
    players: ['user1', 'user2', 'test'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
  {
    id: 11,
    name: 'Room 11',
    owner: 'test',
    players: ['user1', 'user2', 'user3', 'test'],
    max_players: 4,
    game_has_started: false,
  },
  {
    id: 12,
    name: 'Room 12',
    owner: 'test',
    players: ['user1', 'user2', 'user3', 'test'],
    max_players: 4,
    game_has_started: true,
    game_id: 1,
  },
];

export const room = {};
