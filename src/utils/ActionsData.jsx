export const actions = [
  {
    type: 'upgrade_city',
    payload: [
      {
        level: 0,
        index: 0,
      },
    ],
  },
  {
    type: 'build_road',
    payload: [
      [
        {
          level: 1,
          index: 4,
        },
        {
          level: 1,
          index: 5,
        },
      ],
      [
        {
          level: 2,
          index: 16,
        },
        {
          level: 2,
          index: 17,
        },
      ],
    ],
  },
  {
    type: 'build_settlement',
    payload: [
      {
        level: 2,
        index: 15,
      },
    ],
  },
  {
    type: 'bank_trade',
  },
  {
    type: 'buy_card',
  },
  {
    type: 'move_robber',
    payload: [
      {
        position: { level: 1, index: 0 },
        players: [],
      },
      {
        position: { level: 1, index: 1 },
        players: [],
      },
      {
        position: { level: 1, index: 2 },
        players: [],
      },
      {
        position: { level: 1, index: 3 },
        players: [],
      },
      {
        position: { level: 1, index: 4 },
        players: [],
      },
      {
        position: { level: 1, index: 5 },
        players: [],
      },
      {
        position: { level: 2, index: 0 },
        players: [],
      },
      {
        position: { level: 2, index: 1 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 2 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 3 },
        players: [],
      },
      {
        position: { level: 2, index: 4 },
        players: ['user3'],
      },
      {
        position: { level: 2, index: 5 },
        players: ['user3'],
      },
      {
        position: { level: 2, index: 6 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 7 },
        players: ['user2', 'user3'],
      },
      {
        position: { level: 2, index: 8 },
        players: [],
      },
      {
        position: { level: 2, index: 9 },
        players: [],
      },
      {
        position: { level: 2, index: 10 },
        players: [],
      },
      {
        position: { level: 2, index: 11 },
        players: [],
      },
    ],
  },
  {
    type: 'play_knight_card',
    payload: [
      {
        position: { level: 1, index: 0 },
        players: [],
      },
      {
        position: { level: 1, index: 1 },
        players: [],
      },
      {
        position: { level: 1, index: 2 },
        players: [],
      },
      {
        position: { level: 1, index: 3 },
        players: [],
      },
      {
        position: { level: 1, index: 4 },
        players: [],
      },
      {
        position: { level: 1, index: 5 },
        players: [],
      },
      {
        position: { level: 2, index: 0 },
        players: [],
      },
      {
        position: { level: 2, index: 1 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 2 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 3 },
        players: [],
      },
      {
        position: { level: 2, index: 4 },
        players: ['user3'],
      },
      {
        position: { level: 2, index: 5 },
        players: ['user3'],
      },
      {
        position: { level: 2, index: 6 },
        players: ['user2'],
      },
      {
        position: { level: 2, index: 7 },
        players: ['user2', 'user3'],
      },
      {
        position: { level: 2, index: 8 },
        players: [],
      },
      {
        position: { level: 2, index: 9 },
        players: [],
      },
      {
        position: { level: 2, index: 10 },
        players: [],
      },
      {
        position: { level: 2, index: 11 },
        players: [],
      },
    ],
  },
  { type: 'end_turn' },
];

export default actions;
