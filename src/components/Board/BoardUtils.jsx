export const WIDTH = 1000;
export const HEIGHT = 1000;
export const L = 100;

// Helper constants.
const w = WIDTH / 2.0;
const h = HEIGHT / 2.0;
const r = Math.sqrt(L ** 2 - (L / 2) ** 2); // Adjacent side.
const k = L + L / 2;
const l = (Math.sqrt(3) / 2) * L;

export const buildingShape = {
  city: 'rect',
  settlement: 'circle',
};

export const buildingSize = {
  city: [50, 50],
  settlement: [50],
};

export const colour = {
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

export const hexCenter = {
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

export const robberShape = 'circle';

export const robberSize = 60;

export const vertexCenter = {
  0: {
    0: { x: w, y: h - L },
    1: { x: w + r, y: h - L / 2 },
    2: { x: w + r, y: h + L / 2 },
    3: { x: w, y: h + L },
    4: { x: w - r, y: h + L / 2 },
    5: { x: w - r, y: h - L / 2 },
  },
  1: {
    0: { x: w, y: h - 2 * L },
    1: { x: w + r, y: h - (5 / 2) * L },
    2: { x: w + 2 * r, y: h - 2 * L },
    3: { x: w + 2 * r, y: h - L },
    4: { x: w + 3 * r, y: h - L / 2 },
    5: { x: w + 3 * r, y: h + L / 2 },
    6: { x: w + 2 * r, y: h + L },
    7: { x: w + 2 * r, y: h + 2 * L },
    8: { x: w + r, y: h + (5 / 2) * L },
    9: { x: w, y: h + 2 * L },
    10: { x: w - r, y: h + (5 / 2) * L },
    11: { x: w - 2 * r, y: h + 2 * L },
    12: { x: w - 2 * r, y: h + L },
    13: { x: w - 3 * r, y: h + L / 2 },
    14: { x: w - 3 * r, y: h - L / 2 },
    15: { x: w - 2 * r, y: h - L },
    16: { x: w - 2 * r, y: h - 2 * L },
    17: { x: w - r, y: h - (5 / 2) * L },
  },
  2: {
    0: { x: w, y: h - 4 * L },
    1: { x: w + r, y: h - (7 / 2) * L },
    2: { x: w + 2 * r, y: h - 4 * L },
    3: { x: w + 3 * r, y: h - (7 / 2) * L },
    4: { x: w + 3 * r, y: h - (5 / 2) * L },
    5: { x: w + 4 * r, y: h - 2 * L },
    6: { x: w + 4 * r, y: h - L },
    7: { x: w + 5 * r, y: h - L / 2 },
    8: { x: w + 5 * r, y: h + L / 2 },
    9: { x: w + 4 * r, y: h + L },
    10: { x: w + 4 * r, y: h + 2 * L },
    11: { x: w + 3 * r, y: h + (5 / 2) * L },
    12: { x: w + 3 * r, y: h + (7 / 2) * L },
    13: { x: w + 2 * r, y: h + 4 * L },
    14: { x: w + r, y: h + (7 / 2) * L },
    15: { x: w, y: h + 4 * L },
    16: { x: w - r, y: h + (7 / 2) * L },
    17: { x: w - 2 * r, y: h + 4 * L },
    18: { x: w - 3 * r, y: h + (7 / 2) * L },
    19: { x: w - 3 * r, y: h + (5 / 2) * L },
    20: { x: w - 4 * r, y: h + 2 * L },
    21: { x: w - 4 * r, y: h + L },
    22: { x: w - 5 * r, y: h + L / 2 },
    23: { x: w - 5 * r, y: h - L / 2 },
    24: { x: w - 4 * r, y: h - L },
    25: { x: w - 4 * r, y: h - 2 * L },
    26: { x: w - 3 * r, y: h - (5 / 2) * L },
    27: { x: w - 3 * r, y: h - (7 / 2) * L },
    28: { x: w - 2 * r, y: h - 4 * L },
    29: { x: w - r, y: h - (7 / 2) * L },
  },
};
