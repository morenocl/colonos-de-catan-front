export const cards = [
  'road_building',
  'road_building',
  'knight',
  'monopoly',
];

export const cities = [
  {
    colour: '#ff0000',
    positions: [
      {
        level: 1,
        index: 3,
      },
      {
        level: 2,
        index: 5,
      },
    ],
  },
  {
    colour: '#00ff00',
    positions: [
      {
        level: 2,
        index: 16,
      },
    ],
  },
  {
    colour: '#0000ff',
    positions: [
      {
        level: 2,
        index: 18,
      },
    ],
  },
];

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

export const resources = [
  'lumber',
  'lumber',
  'ore',
  'ore',
  'wool',
  'grain',
];

export const roads = [
  {
    colour: '#ff0000',
    positions: [
      [
        {
          level: 0,
          index: 0,
        },
        {
          level: 0,
          index: 1,
        },
      ],
    ],
  },
  {
    colour: '#00ff00',
    positions: [
      [
        {
          level: 1,
          index: 1,
        },
        {
          level: 1,
          index: 2,
        },
      ],
      [
        {
          level: 2,
          index: 1,
        },
        {
          level: 2,
          index: 2,
        },
      ],
    ],
  },
  {
    colour: '#0000ff',
    positions: [
      [
        {
          level: 2,
          index: 6,
        },
        {
          level: 2,
          index: 7,
        },
      ],
    ],
  },
];

export const info = {
  players: [
    {
      username: 'user0',
      colour: '#ff0000',
      development_cards: 0,
      resources_cards: 0,
      victory_points: 0,
      last_gained: [
      ],
    },
    {
      username: 'user2',
      colour: '#00ff00',
      development_cards: 1,
      resources_cards: 1,
      victory_points: 1,
      last_gained: [
        'lumber',
      ],
    },
    {
      username: 'user3',
      colour: '#0000ff',
      development_cards: 2,
      resources_cards: 2,
      victory_points: 2,
      last_gained: [
        'wool',
        'ore',
      ],
    },
  ],
  current_turn: {
    user: 'user1',
    dice: [1, 1],
  },
};

export const robber = {
  level: 0,
  index: 0,
};

export const settlements = [
  {
    colour: '#ff0000',
    positions: [
      {
        level: 0,
        index: 0,
      },
      {
        level: 1,
        index: 2,
      },
    ],
  },
  {
    colour: '#00ff00',
    positions: [
      {
        level: 2,
        index: 4,
      },
    ],
  },
  {
    colour: '#0000ff',
    positions: [
      {
        level: 2,
        index: 11,
      },
    ],
  },
];
