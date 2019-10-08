export const WIDTH = 1000;
export const HEIGHT = 1000;
export const L = 100;
const l = (Math.sqrt(3) / 2) * L;

export const hexPath = [[-L / 2, -l],
  [L / 2, -l],
  [L, 0],
  [L / 2, l],
  [-L / 2, l],
  [-L, 0],
];

export function center(level, index) {
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
  };

  if (level in table && index in table[level]) return (table[level][index]);

  throw Error('Invalid level or index.');
}

export function colour(resource) {
  const colours = {
    brick: '#ff6600',
    lumber: '#663300',
    wool: '#ffffe6',
    grain: '#ffcc00',
    ore: '#c0c0c0',
  };

  if (resource in colours) return (colours[resource]);

  return ('#000000');
}
