export const board = [
  {
    position: {
      level: 0,
      index: 0,
    },
    resource: 'brick',
    token: 0,
  },
  {
    position: {
      level: 1,
      index: 0,
    },
    resource: 'grain',
    token: 1,
  },
  {
    position: {
      level: 1,
      index: 1,
    },
    resource: 'wool',
    token: 1,
  },
  {
    position: {
      level: 1,
      index: 2,
    },
    resource: 'lumber',
    token: 2,
  },
  {
    position: {
      level: 1,
      index: 3,
    },
    resource: 'ore',
    token: 5,
  },
  {
    position: {
      level: 1,
      index: 4,
    },
    resource: 'ore',
    token: 6,
  },
  {
    position: {
      level: 1,
      index: 5,
    },
    resource: 'ore',
    token: 9,
  },
  {
    position: {
      level: 2,
      index: 0,
    },
    resource: 'ore',
    token: 12,
  },
  {
    position: {
      level: 2,
      index: 1,
    },
    resource: 'ore',
    token: 2,
  },
  {
    position: {
      level: 2,
      index: 2,
    },
    resource: 'ore',
    token: 7,
  },
  {
    position: {
      level: 2,
      index: 3,
    },
    resource: 'ore',
    token: 8,
  },
  {
    position: {
      level: 2,
      index: 4,
    },
    resource: 'ore',
    token: 6,
  },
  {
    position: {
      level: 2,
      index: 5,
    },
    resource: 'ore',
    token: 5,
  },
  {
    position: {
      level: 2,
      index: 6,
    },
    resource: 'ore',
    token: 3,
  },
  {
    position: {
      level: 2,
      index: 7,
    },
    resource: 'ore',
    token: 1,
  },
  {
    position: {
      level: 2,
      index: 8,
    },
    resource: 'ore',
    token: 8,
  },
  {
    position: {
      level: 2,
      index: 9,
    },
    resource: 'ore',
    token: 10,
  },
  {
    position: {
      level: 2,
      index: 10,
    },
    resource: 'ore',
    token: 10,
  },
  {
    position: {
      level: 2,
      index: 11,
    },
    resource: 'ore',
    token: 11,
  },
];
const lobbies = [
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
];

export const actions = [
  { type: 'buy_card', payload: 'otro-nada' },
  { type: 'end_turn', payload: 'nada' },
];

export const hand = {
  resources: ['madera', 'ganado'],
  cards: ['monopolio', 'rutas'],
};

export const info = {
  players: [
    {
      username: 'jugador1',
      colour: 'rojo',
      settlements: [
        {
          level: 1,
          index: 1,
        },
      ],
      cities: [
        {
          level: 1,
          index: 1,
        },
      ],
      roads: [
        {
          level: 1,
          index: 1,
        },
      ],
      development_cards: 1,
      resources_cards: 1,
      last_gained: [],
    },
    {
      username: 'jugador2',
      colour: 'azul',
      settlements: [
        {
          level: 2,
          index: 2,
        },
      ],
      cities: [
        {
          level: 2,
          index: 2,
        },
      ],
      roads: [
        {
          level: 2,
          index: 2,
        },
      ],
      development_cards: 2,
      resources_cards: 2,
      last_gained: [],
    },
  ],
  robber: {
    level: 0,
    index: 0,
  },
  current_turn: {
    user: 'jugador1',
    dice: (5, 6),
  },
  winner: 'nadie',
};
