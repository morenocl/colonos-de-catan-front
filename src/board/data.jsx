export const WIDTH = 300;
export const HEIGHT = 300;
export const L = 100;

export function hexPath(x, y) {
  return (
    [[x - L / 2, y - L],
      [x + L / 2, y - L],
      [x + L, y],
      [x + L / 2, y + L],
      [x - L / 2, y + L],
      [x - L, y],
    ]);
}

export function center(level, index) {
  return (
    {
      x: 100,
      y: 100,
      // Only to avoid unused-vars warning.
      z: level + index,
    }
  );
}
