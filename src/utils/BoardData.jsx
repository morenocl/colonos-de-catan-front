export const boards = [
  {
    id: 1,
    name: 'board1',
  },
  {
    id: 2,
    name: 'board2',
  },
  {
    id: 3,
    name: 'board3',
  },
];

export const cards = [
  'knight',
  'knight',
  'knight',
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
    terrain: 'desert',
    token: 0,
  },
  {
    position: {
      level: 1,
      index: 0,
    },
    terrain: 'lumber',
    token: 1,
  },
  {
    position: {
      level: 1,
      index: 1,
    },
    terrain: 'wool',
    token: 2,
  },
  {
    position: {
      level: 1,
      index: 2,
    },
    terrain: 'brick',
    token: 3,
  },
  {
    position: {
      level: 1,
      index: 3,
    },
    terrain: 'ore',
    token: 4,
  },
  {
    position: {
      level: 1,
      index: 4,
    },
    terrain: 'ore',
    token: 5,
  },
  {
    position: {
      level: 1,
      index: 5,
    },
    terrain: 'ore',
    token: 6,
  },
  {
    position: {
      level: 2,
      index: 0,
    },
    terrain: 'ore',
    token: 7,
  },
  {
    position: {
      level: 2,
      index: 1,
    },
    terrain: 'grain',
    token: 8,
  },
  {
    position: {
      level: 2,
      index: 2,
    },
    terrain: 'ore',
    token: 9,
  },
  {
    position: {
      level: 2,
      index: 3,
    },
    terrain: 'ore',
    token: 10,
  },
  {
    position: {
      level: 2,
      index: 4,
    },
    terrain: 'ore',
    token: 11,
  },
  {
    position: {
      level: 2,
      index: 5,
    },
    terrain: 'ore',
    token: 12,
  },
  {
    position: {
      level: 2,
      index: 6,
    },
    terrain: 'ore',
    token: 13,
  },
  {
    position: {
      level: 2,
      index: 7,
    },
    terrain: 'ore',
    token: 14,
  },
  {
    position: {
      level: 2,
      index: 8,
    },
    terrain: 'ore',
    token: 15,
  },
  {
    position: {
      level: 2,
      index: 9,
    },
    terrain: 'ore',
    token: 16,
  },
  {
    position: {
      level: 2,
      index: 10,
    },
    terrain: 'ore',
    token: 17,
  },
  {
    position: {
      level: 2,
      index: 11,
    },
    terrain: 'ore',
    token: 18,
  },
];

export const resources = [
  'lumber',
  'lumber',
  'lumber',
  'lumber',
  'ore',
  'ore',
  'wool',
  'grain',
  'grain',
  'grain',
  'grain',
  'grain',
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
      username: 'test',
      colour: '#ff0000',
      developmentCards: 3,
      resourcesCards: 13,
      victoryPoints: 0,
      lastGained: [
      ],
    },
    {
      username: 'user2',
      colour: '#00ff00',
      developmentCards: 1,
      resourcesCards: 6,
      victoryPoints: 1,
      lastGained: [
        'lumber',
      ],
    },
    {
      username: 'user3',
      colour: '#0000ff',
      developmentCards: 2,
      resourcesCards: 5,
      victoryPoints: 2,
      lastGained: [
        'wool',
        'ore',
      ],
    },
  ],
  currentTurn: {
    user: 'test',
    dice: [3, 4],
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
