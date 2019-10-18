export const hexagons = [
  {
    position: {
      level: 0,
      index: 0,
    },
    resource: 'grain',
    token: 0,
  },
  {
    position: {
      level: 1,
      index: 0,
    },
    resource: 'lumber',
    token: 1,
  },
  {
    position: {
      level: 1,
      index: 1,
    },
    resource: 'wool',
    token: 2,
  },
  {
    position: {
      level: 1,
      index: 2,
    },
    resource: 'brick',
    token: 3,
  },
  {
    position: {
      level: 1,
      index: 3,
    },
    resource: 'ore',
    token: 4,
  },
  {
    position: {
      level: 1,
      index: 4,
    },
    resource: 'ore',
    token: 5,
  },
  {
    position: {
      level: 1,
      index: 5,
    },
    resource: 'ore',
    token: 6,
  },
  {
    position: {
      level: 2,
      index: 0,
    },
    resource: 'ore',
    token: 7,
  },
  {
    position: {
      level: 2,
      index: 1,
    },
    resource: 'ore',
    token: 8,
  },
  {
    position: {
      level: 2,
      index: 2,
    },
    resource: 'ore',
    token: 9,
  },
  {
    position: {
      level: 2,
      index: 3,
    },
    resource: 'ore',
    token: 10,
  },
  {
    position: {
      level: 2,
      index: 4,
    },
    resource: 'ore',
    token: 11,
  },
  {
    position: {
      level: 2,
      index: 5,
    },
    resource: 'ore',
    token: 12,
  },
  {
    position: {
      level: 2,
      index: 6,
    },
    resource: 'ore',
    token: 13,
  },
  {
    position: {
      level: 2,
      index: 7,
    },
    resource: 'ore',
    token: 14,
  },
  {
    position: {
      level: 2,
      index: 8,
    },
    resource: 'ore',
    token: 15,
  },
  {
    position: {
      level: 2,
      index: 9,
    },
    resource: 'ore',
    token: 16,
  },
  {
    position: {
      level: 2,
      index: 10,
    },
    resource: 'ore',
    token: 17,
  },
  {
    position: {
      level: 2,
      index: 11,
    },
    resource: 'ore',
    token: 18,
  },
];

export const rooms = [
  {
    id: 1,
    name: 'nombre1',
    owner: 'owner1',
    players: ['user 1.1'],
    max_players: 1,
  },
  {
    id: 2,
    name: 'nombre2',
    owner: 'owner2',
    players: ['user 2.1', 'user 2.2'],
    max_players: 2,
  },
  {
    id: 3,
    name: 'nombre3',
    owner: 'owner3',
    players: ['user 3.1', 'user 3.2', 'user 3.3'],
    max_players: 3,
  },
];

export const actions = [
  {
    type: 'upgrade_city',
    payload: [
      {
        level: 2,
        index: 1,
      },
    ],
  },
  {
    type: 'build_settlement',
    payload: [
      {
        level: 1,
        index: 1,
      },
    ],
  },
  {
    type: 'bank_trade',
  },
  {
    type: 'buy_card',
  },
];
