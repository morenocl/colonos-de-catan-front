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

  if (level === '0') return ({ x: w, y: h });

  if (level === '1') {
    switch (index) {
      case '0': return ({ x: w + r, y: h - k });
      case '1': return ({ x: w + 2 * r, y: h });
      case '2': return ({ x: w + r, y: h + k });
      case '3': return ({ x: w - r, y: h + k });
      case '4': return ({ x: w - 2 * r, y: h });
      case '5': return ({ x: w - r, y: h - k });
      default: return (undefined);
    }
  }

  return (undefined);
}

export function colour(resource) {
  switch (resource) {
    case 'brick': return ('#ff6600');
    case 'lumber': return ('#663300');
    case 'wool': return ('#ffffe6');
    case 'grain': return ('#ffcc00');
    case 'ore': return ('#c0c0c0');
    default: return ('#000000');
  }
}
