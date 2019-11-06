export const actions = [
  {
    type: 'upgrade_city',
    payload: [
      {
        level: 1,
        index: 8,
      },
      {
        level: 1,
        index: 12,
      },
    ],
  },
  {
    type: 'build_road',
    payload: [
      [
        {
          level: 1,
          index: 12,
        },
        {
          level: 0,
          index: 4,
        },
      ],
      [
        {
          level: 1,
          index: 12,
        },
        {
          level: 1,
          index: 11,
        },
      ],
      [
        {
          level: 1,
          index: 13,
        },
        {
          level: 1,
          index: 14,
        },
      ],
      [
        {
          level: 1,
          index: 8,
        },
        {
          level: 1,
          index: 9,
        },
      ],
      [
        {
          level: 1,
          index: 8,
        },
        {
          level: 1,
          index: 7,
        },
      ],
      [
        {
          level: 2,
          index: 14,
        },
        {
          level: 2,
          index: 13,
        },
      ],
      [
        {
          level: 2,
          index: 16,
        },
        {
          level: 1,
          index: 10,
        },
      ],
      [
        {
          level: 2,
          index: 17,
        },
        {
          level: 2,
          index: 18,
        },
      ],
      [
        {
          level: 2,
          index: 21,
        },
        {
          level: 2,
          index: 20,
        },
      ],
      [
        {
          level: 2,
          index: 21,
        },
        {
          level: 2,
          index: 22,
        },
      ],
    ],
  },
  {
    type: 'build_settlement',
    payload: [
      {
        level: 2,
        index: 17,
      },
      {
        level: 2,
        index: 21,
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
