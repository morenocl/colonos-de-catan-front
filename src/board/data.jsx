export const WIDTH = 1000;
export const HEIGHT = 1000;
export const L = 100;

export const hexPath = [[-L / 2, -L],
  [L / 2, -L],
  [L, 0],
  [L / 2, L],
  [-L / 2, L],
  [-L, 0],
];

export function center(level, index) {
  return (
    {
      x: 100 * level,
      y: 100 * index,
    }
  );
}

export function colour(resource) {
  switch (resource) {
    case 'brick': return ('#ff6600');
    case 'lumber': return ('#663300');
    case 'wool': return ('#ffffe6');
    case 'grain': return ('#ffcc00');
    case 'ore': return ('#333333');
    default: return ('#000000');
  }
}
