export const WIDTH = 1000;
export const HEIGHT = 1000;
export const L = 100;
const l = (Math.sqrt(3) / 2) * L;

const colours = {
  brick: '#ff6600',
  lumber: '#663300',
  wool: '#ffffe6',
  grain: '#ffcc00',
  ore: '#c0c0c0',
};

export const hexPath = [[-L / 2, -l],
  [L / 2, -l],
  [L, 0],
  [L / 2, l],
  [-L / 2, l],
  [-L, 0],
];

export const hexCenter = (level, index) => {
  const w = WIDTH / 2.0;
  const h = HEIGHT / 2.0;
  const r = Math.sqrt(L ** 2 - (L / 2) ** 2); // Adjacent side.
  const k = L + L / 2;

  const table = {
    0: {
      0: { x: w, y: h },
    },
    1: {
      0: { x: w + r, y: h - k },
      1: { x: w + 2 * r, y: h },
      2: { x: w + r, y: h + k },
      3: { x: w - r, y: h + k },
      4: { x: w - 2 * r, y: h },
      5: { x: w - r, y: h - k },
    },
    2: {
      0: { x: w, y: h - 3 * L },
      1: { x: w + 2 * r, y: h - 3 * L },
      2: { x: w + 3 * r, y: h - (3 / 2) * L },
      3: { x: w + 4 * r, y: h },
      4: { x: w + 3 * r, y: h + (3 / 2) * L },
      5: { x: w + 2 * r, y: h + 3 * L },
      6: { x: w, y: h + 3 * L },
      7: { x: w - 2 * r, y: h + 3 * L },
      8: { x: w - 3 * r, y: h + (3 / 2) * L },
      9: { x: w - 4 * r, y: h },
      10: { x: w - 3 * r, y: h - (3 / 2) * L },
      11: { x: w - 2 * r, y: h - 3 * L },
    },
  };

  if (level in table && index in table[level]) return (table[level][index]);

  throw Error('Invalid level or index.');
};

export const colour = (resource) => {
  if (resource in colours) return (colours[resource]);

  throw Error('Invalid colour.');
};
