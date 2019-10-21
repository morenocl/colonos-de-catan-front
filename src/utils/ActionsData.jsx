export const actions = [
  {
    type: 'upgrade_city',
    payload: [
      {
        level: 2,
        index: 13,
      },
    ],
  },
  {
    type: 'build_road',
    payload: [
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
];

export default actions;
