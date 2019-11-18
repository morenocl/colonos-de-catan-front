export const info = {
  players: [
    {
      username: 'test',
      colour: '#ff0000',
      developmentCards: 5,
      resourceCards: 13,
      victoryPoints: 0,
      lastGained: [
      ],
    },
    {
      username: 'user2',
      colour: '#00ff00',
      developmentCards: 1,
      resourceCards: 6,
      victoryPoints: 1,
      lastGained: [
        'lumber',
      ],
    },
    {
      username: 'user3',
      colour: '#0000ff',
      developmentCards: 2,
      resourceCards: 5,
      victoryPoints: 2,
      lastGained: [
        'wool',
        'ore',
      ],
    },
  ],
  currentTurn: {
    user: 'test',
    dice: [3, 5],
  },
};

export const hand = {
  cards: [
    'road_building',
    'knight',
  ],
  resources: [
    'lumber',
    'grain',
  ],
}


export const actions = [
  {
    type: 'end_turn',
  }
];

export const hexes = [
  {
    position: { level: 0, index: 0 },
    terrain: 'desert',
    token: 1,
  },
  {
    position: { level: 1, index: 0 },
    terrain: 'lumber',
    token: 2,
  },
  {
    position: { level: 1, index: 1 },
    terrain: 'wool',
    token: 2,
  },
  {
    position: { level: 1, index: 2 },
    terrain: 'brick',
    token: 3,
  },
  {
    position: { level: 1, index: 3 },
    terrain: 'ore',
    token: 4,
  },
  {
    position: { level: 1, index: 4 },
    terrain: 'ore',
    token: 5,
  },
  {
    position: { level: 1, index: 5 },
    terrain: 'ore',
    token: 6,
  },
  {
    position: { level: 2, index: 0 },
    terrain: 'ore',
    token: 8,
  },
  {
    position: { level: 2, index: 1 },
    terrain: 'grain',
    token: 8,
  },
  {
    position: { level: 2, index: 2 },
    terrain: 'ore',
    token: 9,
  },
  {
    position: { level: 2, index: 3 },
    terrain: 'ore',
    token: 10,
  },
  {
    position: { level: 2, index: 4 },
    terrain: 'ore',
    token: 11,
  },
  {
    position: { level: 2, index: 5 },
    terrain: 'ore',
    token: 12,
  },
  {
    position: { level: 2, index: 6 },
    terrain: 'ore',
    token: 2,
  },
  {
    position: { level: 2, index: 7 },
    terrain: 'ore',
    token: 3,
  },
  {
    position: { level: 2, index: 8 },
    terrain: 'ore',
    token: 4,
  },
  {
    position: { level: 2, index: 9 },
    terrain: 'ore',
    token: 5,
  },
  {
    position: { level: 2, index: 10 },
    terrain: 'ore',
    token: 6,
  },
  {
    position: { level: 2, index: 11 },
    terrain: 'ore',
    token: 6,
  },
];
