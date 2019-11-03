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
    type: 'play_knight_card',
    payload: [
      {
        position: {
          level: 1,
          index: 8,
        },
        players: [
          'user2',
        ],
      },
    ],
  },
];

export default actions;
